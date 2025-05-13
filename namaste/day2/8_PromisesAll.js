function promiseAllWithConcurrencyLimit(functions, limit) {
    return new Promise((resolve, reject) => {
        const results = [];
        let index = 0;      // Which function to start next
        let active = 0;     // How many promises are currently running

        if (functions.length === 0) {
            return resolve([]); // handle empty input
        }

        function run() {
            // Stop if all functions have been started
            if (index === functions.length) return;

            const current = index;
            index++;
            active++;

            functions[current]()
                .then(res => {
                    results[current] = res;
                    active--;

                    if (results.length === functions.length && !results.includes(undefined)) {
                        resolve(results);
                    } else {
                        run(); // Start next task
                    }
                })
                .catch(reject); // reject immediately if any fails

            // Keep starting tasks until limit is hit
            if (active < limit) {
                run();
            }
        }

        // Start initial batch
        for (let i = 0; i < Math.min(limit, functions.length); i++) {
            run();
        }
    });
}

module.exports = promiseAllWithConcurrencyLimit;
