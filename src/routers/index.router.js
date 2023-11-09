const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Index = require("../views/Index");
const Bucket = require("../views/Bucket");
const { checkUser } = require("../middlewares/checkUser");
const { Order, Position, Design, Favourite, User } = require("../../db/models");
const Generator = require("../views/pages/Generator");
const Favorites = require("../views/Favorites");
const OneDesign = require('../views/OneDesign');
const Card2 = require('../views/Card2');
const AllDesigns = require('../views/AllDesigns');


router.get("/", (req, res) => {
  const user = req.session?.user;
  renderTemplate(Index, { user }, res);
});

router.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("myCookie");
    res.redirect("/");
  });
});

router.get("/bucket", async (req, res) => {
  const user = req.session?.user;
  const data = await Order.findAll({
    where: { userId: req.session.user.id, isDone: false },
    include: [
      {
        model: Position,
        include: [
          {
            model: Design,
          },
        ],
      },
    ],
  });
  if (data.length > 0) {
    const order = data.map((el) => el.get({ plain: true }));
    renderTemplate(Bucket, { order: order[0], user }, res);
  } else {
    const data = await Order.create({
      address: "необходимо добавить поле для ввода адреса",
      isDone: false,
      userId: req.session.user.id,
    });
    const order = data.get({ plain: true });

    res.redirect('/bucket');
  }
});

router.get('/favorites', async (req, res) => {
  const user = req.session?.user;
  const data = await Favourite.findAll({
    where: { userId: req.session.user.id },
    include: [{ model: Design }, { model: User }],
  });
  const favorites = data.map((el) => el.get({ plain: true }));
  renderTemplate(Favorites, { favorites, user }, res);
});

router.get('/allDesigns', async (req, res) => {
  const user = req.session?.user;
  const data = await Design.findAll({
    include: [{ model: User }, { model: Favourite }],
  });
  const allDesigns = data.map((el) => el.get({ plain: true }));
  console.log(JSON.stringify(allDesigns, null, 2));
  renderTemplate(AllDesigns, { allDesigns, user }, res);
});

router.get("/generator", async (req, res) => {
  renderTemplate(Generator, { user: req.session?.user }, res);
});


router.get('/onedesign/:id', async (req, res) => {
  try {
  const { id } = req.params
  //console.log('iiiiidddddddd',id)
  const design = await Design.findByPk(

    id, { plain: true, include: {
      model: User
    }},
   
     
     )
   
 
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!idesigggggggggggggg',design)
  
  renderTemplate(Card2, { design}, res);
} catch (error) {
  console.error(error);
}
});







module.exports = router;

// console.log(JSON.stringify(data, null, 2));
