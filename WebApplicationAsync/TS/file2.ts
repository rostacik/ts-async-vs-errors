module someModule2 {
    declare var RSVP: any;

    export async function callSomeAsync(): Promise<void> {
        let res: boolean = await someModule2.getConfirmAsync("yes/no");

        console.log(res);
    }

    export async function getConfirmAsync(message: string): Promise<boolean> {
        var promise = new RSVP.Promise(function (resolve: (value: boolean) => void, reject: (reason: boolean) => void) {
            let res: boolean = confirm(message);

            resolve(res);
        });

        return promise;
    }

}