import {
    Group,
    Line,
    Stroke,
    Color
} from "introcs/graphics";

export class Axes {
    width: number;
    height: number;

    // TODO: Declare a constructor with width and height parameters

    getShapes(): Group {
        let g = new Group();

        // Create a y-axis line and add it to the group
        let yAxis = new Line(0, -this.height/2, 0, this.height/2);
        g.add(yAxis);

        // TODO: Create an x-axis line and add it to the group

        return g;
    }
}