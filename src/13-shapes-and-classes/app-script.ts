import { print, random } from "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Line,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";


/** Constants */
let RADIANS = 2 * Math.PI;
let PERIOD  = 2; // seconds
let MS_IN_S = 1000;
let COUNT   = 10;


/** Global Variables */
let artboard = new SVG("artboard");
artboard.autoScale = false;


/** Begin main program */
export let main = async () => {
    let shapes = new Group();

    // TODO Create a circle and add it to the group

    // TODO: Create an axes object and add it to the group

    // TODO: Create and add multiple circles to the group

    artboard.render(shapes);
};


main();