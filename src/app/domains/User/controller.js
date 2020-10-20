require('dotenv/config');
import User from '../../models/User';

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

class UserController {
  async store(req, res) {

    const { email, telephone_number } = req.body;

    const userEmailExists = await User.findOne({ where: { email } });
    const userTelephoneExists = await User.findOne({ where: { telephone_number } });
    if (userEmailExists) {
      return res.status(400).json({error: 'User email already exists.'});
    }

    if (userTelephoneExists) {
      return res.status(400).json({error: 'User telephone already exists.'});
    }

    try {
      const { id, name, email, telephone_number } = await User.create(req.body);

      return res.json({
        id,
        name,
        email,
        telephone_number,
      });
    } catch (error) {
     

      throw error;
    }
  }

  async getUsers(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'telephone_number'],
    });

    return res.status(200).json(users);
  }

  async update(req, res) {
    const { email, telephone_number } = req.body;

    const userEmailExists = await User.findOne({ where: { email } });
    const userTelephoneExists = await User.findOne({ where: { telephone_number } });

    if ( !userEmailExists || !userTelephoneExists || email !== userTelephoneExists.email || telephone_number !== userEmailExists.telephone_number) {
      return res.status(400).json({error: 'Account not exist.'});

    }

    await userTelephoneExists.update(req.body);

    res.status(200).send({
      message: "Sucess!!"
  })

  }

  

  async sendSms(req, res) {
    const { telephone_number } = req.body;

    try {
      client
      .verify
      .services(process.env.SERVICE_ID)
      .verifications
      .create({
          to: `${telephone_number}`,
          channel: 'sms' 
      })
      .then(data => {
          res.status(200).send({
              message: "Verification is sent!!",
              data
          })
      }).catch((error) => {
        console.log(`Error creating phone reg request, ${error}`);
        res.status(500).json(error);
    });
    } catch (error) {
     

      throw error;
    }



  }

  async verifySms(req, res) {

    const { telephone_number,code } = req.body;

    try {
      client
          .verify
          .services(process.env.SERVICE_ID)
          .verificationChecks
          .create({
              to: `${telephone_number}`,
              code
          })
          .then(data => {
              if (data.status === "approved") {
                  res.status(200).send({
                      message: "User is Verified!!",
                      data
                  })
              }else{
                return res.status(401).json("Wrong code");
            }
          }).catch((error) => {
            return res.status(401).json({ error: 'Error' });


        });
    } catch (error) {
      throw error;

    }



  }



}

export default new UserController();
