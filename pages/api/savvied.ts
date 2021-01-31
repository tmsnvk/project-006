const updateCounter = async (req, res) => {
  try {
    console.log(req.body.data);
    res.json("OK")
  } catch (error) {
    console.log(error);
  }
};

export default updateCounter;