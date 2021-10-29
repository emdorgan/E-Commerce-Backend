const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // create an instance of the model
    const categoryData = await Category.findAll();
    // parse out the relevant data from the findAll()
    const categories = categoryData.map((category) => category.get({ plain: true}));
    // send it to the user
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // database query based on primary key in category table, includes the product and all it's associated info
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    // givse the user an error for invalid IDs.
    if(!categoryData){
      res.status(404).json({message: 'Error: not a valid ID'});
      return;
    }
    //Provides that category (and it's associated products) to the user
    res.status(200).json(categoryData);

  } catch (err) {
  res.status(500).json(err);
}
});

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

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update({
      category_name: req.body.category_name
      },
      {
        where: {id: req.params.id}
      })
    console.log(`category name has been updated to ${req.body.category_name}`);
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
    
    if(!categoryData){
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    console.log(categoryData);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
