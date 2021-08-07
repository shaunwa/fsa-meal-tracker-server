export const deleteIngredientRoute = {
    method: 'delete',
    path: '/ingredients/:name',
    handler: async (req, res) => {
		res.send('Deleting ingredient... (not implemented)'); 
    },
}