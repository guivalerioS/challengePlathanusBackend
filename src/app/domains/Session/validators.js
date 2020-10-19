import * as Yup from 'yup';

export const storeValidator = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      telephone_number: Yup.string().required(),
      password: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
