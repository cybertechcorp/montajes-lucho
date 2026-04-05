# Montajes Lucho

Montajes Lucho is a furniture assembly company. This repository is part of its website.

## Repository

The mono-repository structure is the following:

```
montajes-lucho
├── .github
│   ├── frontend.pipeline.yml
│   └── infrastructure.pipeline.yml
├── frontend
│   └── ...
└── infrastructure
    └── src
        └── ...
```

- The "/frontend" folder contains a React web application. This web application has been built using Vite and Tailwind. 

- The infrastructure uses OpenTofu and AWS, and all its code is in the "/infrastructure/src" folder. The React application is deployed to an S3 bucket + Cloudfront.

- Both the infrastructure and frontend pipelines are GitHub Actions under the "/.github" folder.