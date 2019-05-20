import { print, random, promptString } from "introcs";

export let main = async () => {
    let isPlaying = true;

    while (isPlaying) {
        let question = await promptString("Ask a yes / no question...");

        let response: number;
        // TODO #0: Copy response generating code from first example

        let shouldContinue = await promptString("Ask another? yes / no");

        // TODO #1: Update isPlaying based on the value of shouldContinue
    }

    print("Have a great day.");
};

main();