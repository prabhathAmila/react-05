# Section 01: This is for leaning version contolling

## Setp 01: Create a repository github.com

## Step 02: Create a folder in local machine

## Step 03: Open the project folder in VS code

## Step 04: Opent the terminal of VSCode {bash/cmd/git bash}

## Step 05: Check the git version
``` bash
git -v
```

## Step 06: Initialize a git repo using
``` bash
git init
```

## Step 07: Check the git status
``` bash
git status
```

## Step 08: Add files to the Git
``` bash
# Add all files in the current folder
git add .
# or
# Add all files regardless of the forlder we are in
git add -A
```

## Step 09: Commit the changes with the meaningful commit message
``` bash
# Always should be meaningful, concise and relevent
git commit -m "Initial project commit"
# ex: This commit will: "Update script file"
# ex: This commit will: "Refactor current logic"
```

## Step 10: Check if there's any existing remore urls
``` bash
git remote -v
```

## Step 11: Check if the remore url configured without a issue
``` bash
git remote add origin git@github.com:<remote-url>
# ex: git remote add origin https://github.com/prabhathAmila/react-05.git
```

## Step 12: Check if the remote url configured without a issue
``` bash
git remote -v
```

## Step 13: Make sure the default branch is your `main` branch
``` bash
git branch -M main
```

## Step 14: Push the local commits to the remote/cloud branch
``` bash
git push -u origin main
```

## Step 15: Check if the changes are there in the remote

---
# Section 02
## Step 16: Do a file change 

## Step 17: Check file change in VSCode

## Step 18: Check file chage in terminal using
``` bash
git status
```

## Step 19: Repeart step 08

## Step 20: Proper commit message
```bash
    git commit -m "Update the steps doc"
```

## Step 21: Push the changes the existing branch
```bash
    git push
```

## Step 22: Create a new branceh called `div` from main branch
```bash
    git checkout -b dev
```

## Step 23: Publish the branch to remote `origin dev`
```bash
git push -u origin dev
```

## Step 24: Repeat step 08

## Step 25: Create a Pull request from Git and merge it to main
```bash
# Navigate between branches
git checkout main
git checkout dev

# Check the changes/status between local and remote
git fetch

# Checkout to main branch
git checkout main

# Pull the changes to local form remote mainbranch
git pull

git checkout

# Stash changes temporary

git stash

# Apply stashed changes back
git stash apply

# Marge changes in dev branch to main

git checkout main

git merge dev

git status

git push
```

# Config git username and email

```bash
git config --global user.name "Your Name"

# and

git config --global user.email "youremail@email.com" 
```
# Check git config

```bash
git config user.name
git config user.email
```