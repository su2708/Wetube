export const homePage = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("Search");
export const see = (req, res) => res.send(`See Videos #${req.params.id}`);
export const edit = (req, res) => res.send(`Edit Videos #${req.params.id}`);
export const remove = (req, res) => res.send(`Remove Videos #${req.params.id}`);
export const upload = (req, res) => res.send("Upload Videos");