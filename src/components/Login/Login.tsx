import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
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
              id="email"
              label="Email"
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
              Don't have an account? <Link to="/register">Register</Link>
            </Typography>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
