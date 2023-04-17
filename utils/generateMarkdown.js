// function tthat returns a license badge
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![GitHub License](https://img.shields.io/badge/license=${license}=yellowgreen.svg)`;
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
            Licensed under the ${license} license.`;
    }
    return "";
}

// function to generate markdown
function generateMarkdown(data) {
    return `# ${data.title}
    by ${data.name}
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    *[Description](#Description)
    *[Installation](#Installation)
    *[Usage](#Usage)
    *[Contact-Me](#Contact-Me)
    *[Contributors](#Contributors)
    *[Tests](#Tests)
    ${renderLicenseLink(data.license)}
    ## Description
    ${data.description}
    ## Requirements
    ${data.require}
    ## Usage
    ${data.usage}
    ## Contact-Me
    * Name - ${data.name}
    * Email - ${data.email}
    * GitHub - [${data.creator}](https://github.com/${data.creator}/)
    ## Contributors
    ${data.contributors}
    ## Testing
    \`\`\`
    ${data.test}
    \`\`\`
    ${renderLicenseSec(data.license)}
    `;
}

module.exports = generateMarkdown;