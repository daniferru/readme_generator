// function tthat returns a license badge
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![GitHub License](https://img.shields.io/badge/license=${License}=yellowgreen.svg)`;
    }
    return "";
}

// function that returns the license link
function renderLicenseLink(license) {
    if (license !== "none") {
        return `\n* [License](#license)\n`;
    }
    return "";
}
// function that returns the license section of README
function renderLicenseSec(license) {
    if (license !== "none") {
        return `## License
            Licensed under the ${License} license.`;
    }
    return "";
}

// function to generate markdown
function generateMarkdown(data) {
    return `# ${data.Title}
    by ${data.Name}
    ${renderLicenseBadge(data.License)}
    ## Table of Contents
    *[Description](#Description)
    *[Installation](#Installation)
    *[Usage](#Usage)
    *[Contact-Me](#Contact-Me)
    *[Contributors](#Contributors)
    *[Tests](#Tests)
    ${renderLicenseLink(data.License)}
    ## Description
    ${data.Description}
    ## Requirements
    ${data.Require}
    ## Usage
    ${data.Usage}
    ## Contact-Me
    * Name - ${data.Name}
    * Email - ${data.Email}
    * GitHub - [${data.Creator}](https://github.com/${data.Creator}/)
    ## Contributors
    ${data.Contributors}
    ## Testing
    \`\`\`
    ${data.Test}
    \`\`\`
    ${renderLicenseSec(data.License)}
    `;
}

module.exports = generateMarkdown;