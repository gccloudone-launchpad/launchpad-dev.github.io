---
title: Test Page
description: ""
translationKey: test-page
draft: true
tags: []
categories: []
---


{{< details summary="See the details" >}}
This is a **bold** word.
{{< /details >}}

## testing

lkjasdlkjasdf *lkjasldkjasdf*

lkjlkjasdf ~lkajsdlkajs

- [ ] foo
- [x] bar

```goat
      .               .                .               .--- 1          .-- 1     / 1
     / \              |                |           .---+            .-+         +
    /   \         .---+---.         .--+--.        |   '--- 2      |   '-- 2   / \ 2
   +     +        |       |        |       |    ---+            ---+          +
  / \   / \     .-+-.   .-+-.     .+.     .+.      |   .--- 3      |   .-- 3   \ / 3
 /   \ /   \    |   |   |   |    |   |   |   |     '---+            '-+         +
 1   2 3   4    1   2   3   4    1   2   3   4         '--- 4          '-- 4     \ 4

```

```mermaid
flowchart TD

    %%{init: { 'flowchart': {'curve': 'basis'} } }%%
    classDef classRed fill:#F88
    classDef classOrange fill:#ffa500
    classDef classGreen fill:#88FF88
    A(["Client submits business intake"])

    dIntakeReview{"Evo team intake review"}
    dStartNow{"Start Now?"}    
    
    sNew(New)
    sInProgress(In Progress)
    sQueued(Queued)
    sOnHold(On Hold)
    sPending(Pending)
    sCancel(Canceled)
    sRejected(Rejected)
    sCloseOut(Closing out)
    sComplete(Completed)
    
    N{{"Intake consult meeting (Profile 3 requests require Profile 3 T&Cs review)"}}
    
    A ==> sNew
    sNew ==> dIntakeReview
    
    dIntakeReview -----x|No| sRejected:::classRed
    dStartNow -->|No| sQueued
    sQueued -.-> dStartNow
    sPending ---> N
    N -.-> dIntakeReview
    dIntakeReview --> |Profile 3 Request or More Info Needed| sPending
    
    dIntakeReview ==>|Yes| dStartNow
    
    dStartNow ==> |"Yes (kickoff scheduled)"| sInProgress

    sOnHold --> sInProgress
    sOnHold ---x sCancel:::classOrange
    sInProgress --->|"Pause for some reason"| sOnHold
    subgraph Active Experiment
        sInProgress ---x sCancel:::classOrange
        
        sInProgress ==>|Experiment/technical wrapped| sCloseOut
        sCloseOut ==x|"Lessons learned, final reports et al complete"| sComplete:::classGreen
    end
```
