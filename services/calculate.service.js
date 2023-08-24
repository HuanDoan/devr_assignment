module.exports = {
    sum: (numbers) => {
        try {
            return numbers.reduce((acc, num) => {
                // Parse all data to number
                return acc*1 + num*1
            }, 0)
        } catch (err) {
            console.error(err)

            return 0
        }
    }
}
