## Runtime

This looks great. Your CSS is very nice and your code is professional and of high quality.

Main Issues:

- Your work is in the **CongressAddress** folder.
- Your code runs without errors or warnings.
- I can iterate through records, backward and forwards.
- I can go to first and last records. +2
- You display only a few records and did not seem to get GetAddress working fully.
- I can switch between components with the menu. It is not properly styled.
- In **SmallNumbers**, you provide a view of 1 numbers. You might have added a few more.

You have properly refactored your code into the following files or something similar:

- Address.js
- AddressShow.js
- AddressChanger
- AddressEdit
- ElfHeader
- ElfMenu
- SmallNumbers

As suggested, your React components are in files that begin with a capital letter and use Pascal casing.

The following directories exist:

- \_\_tests\_\_
- components
- css
- images

Smaller Issues

- **address-list.js** exists
- **index.js** is properly implemented
- You do a good job of formatting your code.
- You have some dead code in your files. With Git, you can always go back and find code you decided to delete. Just take the plunge and delete all that code you have commented out.

## Testing

You have 53 working tests and they are refactored into 5  **modules**, at least approximately one per component.

You are using the Enzyme debug statements.

Great work!

## Get Address

You turned in a copy Address.json with the output from your program in it, not the code we download with curl from **govtrack.us**.

But with the right JSON, get Address produces the expected code. Good work.

Good work.

## Commit Graded

Here is what I was looking at:


```
commit cc2ba893ef655b556983d464c471485ee8dfa00d
Author: Andrew Wilson at School <andrewf.wilson@bellevuecollege.edu>
Date:   Wed May 10 19:46:44 2017 -0700

    midterm complete
```

If you feel this was the wrong commit, let me know.

## Scoring

My scoring is very subjective, but here are approximate criteria for some issues:

- No GetAddress -3
- Not enough tests -3
- Broken tests -3
- Errors or warnings at runtime -3

Extra Credit

- GetAddress works at RunTime +2
- Button goes first and last + 2

## Create Charlie Branch for Comments

Here is how I created the branch where I place your comments. First I find the commit you want me to grade. Then I:


```bash
git branch charlie-midterm
git checkout charlie-midterm
touch CharlieComments.md
```

## Push Comments

Here is how I push that branch.


```bash
git add CharlieComments.md
git commit -m "CharlieComments"
git push --set-upstream origin charlie-midterm
```

I provide a link to the comments, but if you can't find them, just go to your online repository, select the charlie-comment branch, and look for the file called **CharlieComments.md**.

============

My comments are here:

https://github.com/afwilson42/prog272_wilson-2017/blob/charlie-midterm/CharlieComments.md

And also attached, but easier to read through the above link to your repository.
