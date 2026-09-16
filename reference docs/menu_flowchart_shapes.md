```mermaid
flowchart TB
    HOME((Launchpad public website))
    HOME --> PUBLIC@{ shape: folder, label: "Public" }
    HOME --> PRIVATE@{ shape: folder, label: "Private" }

    PUBLIC --> ABOUT@{ shape: folder, label: "About Us" }
    PUBLIC --> POLICIES@{ shape: folder, label: "Policies" }
    PUBLIC --> SERVICES@{ shape: folder, label: "Services" }

    PRIVATE --> INFORMATION@{ shape: folder, label: "Information" }
    PRIVATE --> TUTORIALS@{ shape: folder, label: "Tutorials" }
    INFORMATION --> INFO_AWS@{ shape: folder, label: "AWS" }
    INFORMATION --> INFO_GCP@{ shape: folder, label: "GCP" }
    INFORMATION --> INFO_GENERAL@{ shape: folder, label: "General" }
    TUTORIALS --> TUTORIAL_AWS@{ shape: folder, label: "AWS" }
    TUTORIALS --> TUTORIAL_AZURE@{ shape: folder, label: "Azure" }
    TUTORIALS --> TUTORIAL_GCP@{ shape: folder, label: "GCP" }
    TUTORIALS --> TUTORIAL_GENERAL@{ shape: folder, label: "General" }

    classDef root fill:#3b1f5c,color:#fff,stroke:#241238,stroke-width:2px
    classDef public fill:#163d6b,color:#fff,stroke:#0d2747
    classDef private fill:#6b1f2a,color:#fff,stroke:#42131a
    class HOME root
    class PUBLIC,ABOUT,POLICIES,SERVICES public
    class PRIVATE,INFORMATION,TUTORIALS,INFO_AWS,INFO_GCP,INFO_GENERAL,TUTORIAL_AWS,TUTORIAL_AZURE,TUTORIAL_GCP,TUTORIAL_GENERAL private
```
