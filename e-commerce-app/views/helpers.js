module.exports = {
    getError(erros,prop) {
        try {
            return erros.mapped()[prop].msg
        } catch (error) {
            return ''
        }
    }
}