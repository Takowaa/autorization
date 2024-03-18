import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Must be 15 characters or less').required(),
      surname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required(),
      password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required(),
    }),
    onSubmit: (values) => {
      console.log(values, 'form');
    },
  });

  return (
    <Grid
      container
      justifyContent="center"
      height="100vh"
      alignItems="center"
      spacing={2}
    >
      <Grid item md={6}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="surname"
              label="Surname"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.surname}
              error={Boolean(formik.touched.surname && formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Typography variant="subtitle1" gutterBottom>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
            <Button type="submit" variant="contained">
              Register
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default Register;
