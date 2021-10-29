const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET route that returns all categories and their products
router.get('/', async (req, res) => {
  try {
    // create an instance of the model, parse out relevant data with .get() presents it to the user
    const categoryData = await Category.findAll({
      include: { model: Product },
    });
    const categories = categoryData.map((category) => category.get({ plain: true}));
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route that returns the category of the stated ID
router.get('/:id', async (req, res) => {
  try {
    // database query based on primary key in category table, includes the product and all it's associated info
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if(!categoryData){
      res.status(404).json({message: 'Error: not a valid ID'});
      return;
    }
    res.status(200).json(categoryData);

  } catch (err) {
  res.status(500).json(err);
}
});

//POST route to add a category
router.post('/', async (req, res) => {
  try {
    // adds a category to the database, espects a JSON object with a single key of category_names
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
    console.log(`added ${categoryData.category_name} to the database with an id of ${categoryData.id}`)
  } catch (err) {
  res.status(500).json(err);
}
});

//PUT route to update a category of the given id
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update({
      category_name: req.body.category_name
      },
      {
        where: {id: req.params.id}
      })
    res.status(200).json({message: `category name has been updated to ${req.body.category_name}`});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy(
      {
        where: {id: req.params.id}
      });
    
    if(!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json({message: `Category deleted`});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;