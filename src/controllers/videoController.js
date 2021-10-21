export const homePage = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => res.send(`Remove Videos #${req.params.id}`);
export const upload = (req, res) => res.send("Upload Videos");