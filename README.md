# Payment Form

Creating a payment form prototype for ILLUSTRERET VIDENSKAB.

## Getting Started

Clone the repository onto your machine.

    ```
    git clone https://github.com/RytisDr/Illustreret-Videnskab-Form.git
    ```

### Installing

Now you need to install the package that we are working with on this project (f. e. npm modules or other specific data), you do that by writing:

    ```
    npm install package.json
    ```

### WORKFLOW

I assume we all have the standard add/commit/push sequence down, if not, tell me to include it here as well.
Just make sure to push your changes at the end of the day, it wont be a problem if we are working on different branches, but will become one upon merging.

#### Index sections

The index body is divided into 3 sections, we can either create 3 different forms or one form divided into these sections,
but then submit button should only be submiting the form on the last page. Lets work on the same sections that we prototyped with.

Regardless,

1. Assume the first section #magazineNr will always be the base section (wont change its position).
2. Other two sections wont be visible (out of viewport) until the first selection is made (and valid, of course).
3. The second section slides in and is stacked on the #magazineNr section, the same happens with subsequent section; stacked on the second one.
4. Upon back button click the animations reverse and the section slides out again, out of the viewport.

If you have other suggestions, ideas etc. add/modify them here.

#### Branching

To create a new branch and switch to it (from master):

    ```
    git branch BRANCHNAME
    git checkout BRANCHNAME
    ```

OR the shorthad property, that does the same:

    ```
    git checkout -b BRANCHNAME
    ```

This creates a branch locally and enters it.

##### Publishing a local branch remotely (to track its progress online)

    ```
    git push -u origin BRANCHNAME
    ```

#### Running the dev server

Remember NOT to use live-server command, as we are running npm module (SASS) we will use parcel on our index.html
(this will also probably create a dist folder that contains packed version of our project for _hint: dist_ distribution , how neat is that):

    ```
    parcel index.html
    ```

Keep this server running as a separate console window during development.

#### Working with SCSS/CSS

DONT EDIT STYLE.CSS IN ROOT FOLDER, we will use scss-files/base-sass.scss for common styling or importing our partials ("\_mypartial.scss")
Work on your specific css propeties using a partial, created inside the scss folder for example:

    ```
    _mypartial.scss
    ```

_Remember you can still write your regural, old css inside the partial, you dont have to use any of sass features if you don't want it._

To import your partial into our base-sass.scss (which will be translated into style.css), use:

    ```
    @import ‘mypartial’
    ```

To keep the scss coversion running, with already specified script from package.json, called "sass":

    ```
    npm run sass
    ```

This coverts our scss-files/base-sass.scss to style.css.

Keep this running on its own console window.

Sass documentation:
https://sass-lang.com/documentation/
https://devdocs.io/sass/

##### Merging

When we are ready to merge back into master, we should be communicating live/face-to-face.

First make sure you have the latest version of master by switching to it and pulling:

    ```
    git checkout master
    git pull
    ```

AND to merge your branch into master:

    ```
    git merge BRANCHNAME
    ```

Solve conflicts together (if there are any), and then:

    ```
    git push
    ```
