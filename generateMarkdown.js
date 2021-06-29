function generateMarkdown(data, githubInfo) {
    return `

  # **${data.title}**

  [!${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description 

  ${data.description}

  ## Table of contents

  - [Description](#Description)

  - [Installation](#Installation)

  - [Usage](#Usage)

  - [License](#License)

  - [Contributors](#Contributors)

  - [Test](#Test)

  - [Repository Link](#Repository)

  - [GitHub Info](#GitHub) 

  ## Installation

          ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  - This project includes the following license:
  [!${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  ## Contributors

  ${data.contributing}

  ## Test

  ${data.test}

  ## Repository

  - [Project Repo](${data.repo})

  ## GitHub

  ![Image of me](${githubInfo.githubImage})

  - ${githubInfo.name}

  - [GitHub Profile](${githubInfo.profile})

  - [Email ${githubInfo.name}](mailto:${githubInfo.email})
  `;
  }
  
  module.exports = generateMarkdown;
  