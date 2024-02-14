// // import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import Select from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';

// // function SignUp() {
// //   const [formData, setFormData] = React.useState({
// //     // firstname: '',
// //     // lastname:'',
// //     name:'',
// //     email: '',
// //     password: '',
// //     allowExtraEmails: false,
// //     role: 'user',
// //   });

// //   const [formErrors, setFormErrors] = React.useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     password: '',
// //   });

// //   const validateField = (fieldName, value) => {
// //     switch (fieldName) {
// //       case 'Name':
// //        setFormErrors((prevErrors) => ({
// //                ...prevErrors,
// //            Name: value.trim() ? '' : 'Name is required',
// //          }));
// //       // case 'firstName':
// //       //   setFormErrors((prevErrors) => ({
// //       //     ...prevErrors,
// //       //     firstName: value.trim() ? '' : 'First Name is required',
// //       //   }));
// //       //   break;
// //       // case 'lastName':
// //       //   setFormErrors((prevErrors) => ({
// //       //     ...prevErrors,
// //       //     lastName: value.trim() ? '' : 'Last Name is required',
// //       //   }));
// //         break;
// //       case 'email':
// //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         setFormErrors((prevErrors) => ({
// //           ...prevErrors,
// //           email: emailRegex.test(value) ? '' : 'Invalid email address',
// //         }));
// //         break;
// //       case 'password':
// //         setFormErrors((prevErrors) => ({
// //           ...prevErrors,
// //           password: value.length >= 6 ? '' : 'Password must be at least 6 characters',
// //         }));
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     const fieldValue = type === 'checkbox' ? checked : value;

// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: fieldValue,
// //     }));

// //     validateField(name, fieldValue);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     Object.keys(formData).forEach((fieldName) => {
// //       validateField(fieldName, formData[fieldName]);
// //     });

// //     const hasErrors = Object.values(formErrors).some((error) => error !== '');

// //     if (!hasErrors) {
// //       console.log('Form submitted:', formData);
// //     }
// //   };

// //   return (
// //     <ThemeProvider theme={createTheme()}>
// //       <Container component="main" maxWidth="xs">
// //         <CssBaseline />
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //             <LockOutlinedIcon />
// //           </Avatar>
// //           <Typography component="h1" variant="h5">
// //             Sign up
// //           </Typography>
// //           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12} >
// //                 <TextField
// //                  autoComplete="given-name"
// //                  name="Name"
// //                  required
// //                  fullWidth
// //                  id="Name"
// //                  label="Name"
// //                  autoFocus
// //                  value={formData.Name}
// //                  onChange={handleInputChange}
// //                  error={!!formErrors.Name}
// //                  helperText={formErrors.Name}
// //                  InputProps={{
// //                    style: { borderColor: 'green' }, // Set the border color to green
// //                  }}
// //                />
// //                 {/* //   autoComplete="given-name"
// //                 //   name="firstName"
// //                 //   required
// //                 //   fullWidth
// //                 //   id="firstName"
// //                 //   label="First Name"
// //                 //   autoFocus
// //                 //   value={formData.firstName}
// //                 //   onChange={handleInputChange}
// //                 //   error={!!formErrors.firstName}
// //                 //   helperText={formErrors.firstName}
// //                 //   InputProps={{ */}
// //                 {/* //     style: { borderColor: 'green' }, // Set the border color to green
// //                 //   }}
// //                 // /> */}
// //               {/* </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="lastName"
// //                   label="Last Name"
// //                   name="lastName"
// //                   autoComplete="family-name"
// //                   value={formData.lastName}
// //                   onChange={handleInputChange}
// //                   error={!!formErrors.lastName}
// //                   helperText={formErrors.lastName}
// //                   InputProps={{
// //                     style: { borderColor: 'green' }, // Set the border color to green
// //                   }}
// //                 /> */}
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="email"
// //                   label="Email Address"
// //                   name="email"
// //                   autoComplete="email"
// //                   value={formData.email}
// //                   onChange={handleInputChange}
// //                   error={!!formErrors.email}
// //                   helperText={formErrors.email}
// //                   InputProps={{
// //                     style: { borderColor: 'green' }, // Set the border color to green
// //                   }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   name="password"
// //                   label="Password"
// //                   type="password"
// //                   id="password"
// //                   autoComplete="new-password"
// //                   value={formData.password}
// //                   onChange={handleInputChange}
// //                   error={!!formErrors.password}
// //                   helperText={formErrors.password}
// //                   InputProps={{
// //                     style: { borderColor: 'green' }, // Set the border color to green
// //                   }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   select
// //                   fullWidth
// //                   id="role"
// //                   label="Role"
// //                   name="role"
// //                   value={formData.role}
// //                   onChange={handleInputChange}
// //                   InputProps={{
// //                     style: { borderColor: 'green' }, // Set the border color to green
// //                   }}
// //                 >
// //                   <MenuItem value="user">User</MenuItem>
// //                   <MenuItem value="admin">Admin</MenuItem>
// //                 </TextField>
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <FormControlLabel
// //                   control={<Checkbox name="allowExtraEmails" color="primary" />}
// //                   label="Confirm Credential."
// //                   checked={formData.allowExtraEmails}
// //                   onChange={handleInputChange}
// //                 />
// //               </Grid>
// //             </Grid>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               href="/login"
// //               sx={{ mt: 3, mb:2, bgcolor: 'green' }}
// //             >
// //               Create Account
// //             </Button>
// //             <Grid container justifyContent="flex-end">
// //               <Grid item>
// //                 <Link href="#" variant="body2">
// //                   Already have an account? Sign in
// //                 </Link>
// //               </Grid>
// //             </Grid>
// //           </Box>
// //         </Box>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }

// // export default SignUp;
// // import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import Select from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';

// // function SignUp() {
// //   const [formData, setFormData] = React.useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     allowExtraEmails: false,
// //     role: 'user',
// //   });

// //   const [formErrors, setFormErrors] = React.useState({
// //     Name: '',
// //     email: '',
// //     password: '',
// //   });

// //   const validateField = (fieldName, value) => {
// //     switch (fieldName) {
// //       case 'Name':
// //         setFormErrors((prevErrors) => ({
// //           ...prevErrors,
// //           Name: value.trim() ? '' : 'Name is required',
// //         }));
// //         break;
// //       case 'email':
// //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         setFormErrors((prevErrors) => ({
// //           ...prevErrors,
// //           email: emailRegex.test(value) ? '' : 'Invalid email address',
// //         }));
// //         break;
// //       case 'password':
// //         setFormErrors((prevErrors) => ({
// //           ...prevErrors,
// //           password: value.length >= 6 ? '' : 'Password must be at least 6 characters',
// //         }));
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     const fieldValue = type === 'checkbox' ? checked : value;

// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: fieldValue,
// //     }));

// //     validateField(name, fieldValue);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     Object.keys(formData).forEach((fieldName) => {
// //       validateField(fieldName, formData[fieldName]);
// //     });

// //     const hasErrors = Object.values(formErrors).some((error) => error !== '');

// //     if (!hasErrors) {
// //       console.log('Form submitted:', formData);
// //       // Add logic to handle form submission, e.g., send data to the server
// //     }
// //   };

// //   return (
// //     <ThemeProvider theme={createTheme()}>
// //       <Container component="main" maxWidth="xs">
// //         <CssBaseline />
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //             <LockOutlinedIcon />
// //           </Avatar>
// //           <Typography component="h1" variant="h5">
// //             Sign up
// //           </Typography>
// //           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   autoComplete="given-name"
// //                   name="name"
// //                   required
// //                   fullWidth
// //                   id="name"
// //                   label="Name"
// //                   autoFocus
// //                   value={formData.name}
// //                   onChange={handleInputChange}
// //                   error={!!formErrors.Name}
// //                   helperText={formErrors.Name}
// //                   InputProps={{
// //                     style: { borderColor: 'green' },
// //                   }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="email"
// //                   label="Email Address"
// //                   name="email"
// //                   autoComplete="email"
// //                   value={formData.email}
// //                   onChange={handleInputChange}
// //                   error={!!formErrors.email}
// //                   helperText={formErrors.email}
// //                   InputProps={{
// //                     style: { borderColor: 'green' },
// //                   }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   name="password"
// //                   label="Password"
// //                   type="password"
// //                   id="password"
// //                   autoComplete="new-password"
// //                   value={formData.password}
// //                   onChange={handleInputChange}
// //                   error={!!formErrors.password}
// //                   helperText={formErrors.password}
// //                   InputProps={{
// //                     style: { borderColor: 'green' },
// //                   }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   select
// //                   fullWidth
// //                   id="role"
// //                   label="Role"
// //                   name="role"
// //                   value={formData.role}
// //                   onChange={handleInputChange}
// //                   InputProps={{
// //                     style: { borderColor: 'green' },
// //                   }}
// //                 >
// //                   <MenuItem value="user">User</MenuItem>
// //                   <MenuItem value="admin">Admin</MenuItem>
// //                 </TextField>
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <FormControlLabel
// //                   control={<Checkbox name="allowExtraEmails" color="primary" />}
// //                   label="Confirm Credential."
// //                   checked={formData.allowExtraEmails}
// //                   onChange={handleInputChange}
// //                 />
// //               </Grid>
// //             </Grid>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               href="/login"
// //               sx={{ mt: 3, mb: 2, bgcolor: 'green' }}
// //             >
// //               Create Account
// //             </Button>
// //             <Grid container justifyContent="flex-end">
// //               <Grid item>
// //                 <Link href="#" variant="body2">
// //                   Already have an account? Sign in
// //                 </Link>
// //               </Grid>
// //             </Grid>
// //           </Box>
// //         </Box>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }

// // export default SignUp;
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// // import './SignUp.css';

// function SignUp() {
//   const [formData, setFormData] = React.useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     allowExtraEmails: false,
//     role: 'user',
//   });

//   const [formErrors, setFormErrors] = React.useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const validateField = (fieldName, value) => {
//     switch (fieldName) {
//       case 'firstName':
//         setFormErrors((prevErrors) => ({
//           ...prevErrors,
//           firstName: value.trim() ? '' : 'First Name is required',
//         }));
//         break;
//       case 'lastName':
//         setFormErrors((prevErrors) => ({
//           ...prevErrors,
//           lastName: value.trim() ? '' : 'Last Name is required',
//         }));
//         break;
//       case 'email':
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         setFormErrors((prevErrors) => ({
//           ...prevErrors,
//           email: emailRegex.test(value) ? '' : 'Invalid email address',
//         }));
//         break;
//       case 'password':
//         setFormErrors((prevErrors) => ({
//           ...prevErrors,
//           password: value.length >= 6 ? '' : 'Password must be at least 6 characters',
//         }));
//         break;
//       default:
//         break;
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === 'checkbox' ? checked : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: fieldValue,
//     }));

//     validateField(name, fieldValue);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newFormErrors = {};

//     Object.keys(formData).forEach((fieldName) => {
//       validateField(fieldName, formData[fieldName]);
//       newFormErrors[fieldName] = formErrors[fieldName]; // Get the latest errors after validation
//     });

//     setFormErrors(newFormErrors);

//     const hasErrors = Object.values(newFormErrors).some((error) => error !== '');

//     if (!hasErrors) {
//       console.log('Form submitted:', formData);
//       // Here you can proceed with your form submission logic
//     }
//   };

//   return (
//     <div className='signn'>
//       <ThemeProvider theme={createTheme()} class="signn">
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign up
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     autoComplete="given-name"
//                     name="firstName"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     error={!!formErrors.firstName}
//                     helperText={formErrors.firstName}
//                     InputProps={{
//                       style: { borderColor: 'green' }, // Set the border color to green
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="family-name"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     error={!!formErrors.lastName}
//                     helperText={formErrors.lastName}
//                     InputProps={{
//                       style: { borderColor: 'green' }, // Set the border color to green
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     error={!!formErrors.email}
//                     helperText={formErrors.email}
//                     InputProps={{
//                       style: { borderColor: 'green' }, // Set the border color to green
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="new-password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     error={!!formErrors.password}
//                     helperText={formErrors.password}
//                     InputProps={{
//                       style: { borderColor: 'green' }, // Set the border color to green
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     select
//                     fullWidth
//                     id="role"
//                     label="Role"
//                     name="role"
//                     value={formData.role}
//                     onChange={handleInputChange}
//                     InputProps={{
//                       style: { borderColor: 'green' }, // Set the border color to green
//                     }}
//                   >
//                     <MenuItem value="user">User</MenuItem>
//                     <MenuItem value="admin">Admin</MenuItem>
//                   </TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={<Checkbox name="allowExtraEmails" color="primary" />}
//                     label="I want to receive inspiration, marketing promotions and updates via email."
//                     checked={formData.allowExtraEmails}
//                     onChange={handleInputChange}
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 href="/login"
//                 sx={{ mt: 3, mb: 2, bgcolor: 'green' }}
//                 disabled={Object.values(formErrors).some((error) => error !== '')}
//               >
//                 Sign Up
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     Already have an account? Sign in
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default SignUp;

// import React, { useState } from 'react';
// import { Button, TextField } from '@mui/material';
// import { Link } from 'react-router-dom';
// // import '../assets/css/Login.css'; // Using the same CSS file for styling
// import axios from 'axios';

// function SignUp() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const handleUsernameChange = (event) => {
//     const newUsername = event.target.value;
//     if (!/\s/.test(newUsername) && newUsername.length >= 6 && newUsername.length <= 12) {
//       setUsername(newUsername);
//       setUsernameError('');
//     } else {
//       setUsernameError('Username should be between 6 and 12 characters and should not contain spaces.');
//     }
//   };

//   const handleEmailChange = (event) => {
//     const newEmail = event.target.value;
//     // Simple email validation (you might want to use a more sophisticated validation)
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (emailRegex.test(newEmail)) {
//       setEmail(newEmail);
//       setEmailError('');
//     } else {
//       setEmailError('Invalid email address.');
//     }
//   };

//   const handlePasswordChange = (event) => {
//     const newPassword = event.target.value;

//     // Password conditions
//     const hasUpperCase = /[A-Z]/.test(newPassword);
//     const hasLowerCase = /[a-z]/.test(newPassword);
//     const hasDigit = /\d/.test(newPassword);

//     if (
//       newPassword.length >= 8 &&
//       hasUpperCase &&
//       hasLowerCase &&
//       hasDigit
//     ) {
//       setPassword(newPassword);
//       setPasswordError('');
//     } else {
//       setPasswordError('Password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
//     }
//   };

//   const handleConfirmPasswordChange = (event) => {
//     const newConfirmPassword = event.target.value;

//     if (newConfirmPassword === password) {
//       setConfirmPassword(newConfirmPassword);
//       setConfirmPasswordError('');
//     } else {
//       setConfirmPasswordError('Passwords do not match.');
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!username) {
//       setUsernameError('Please enter a username.');
//     }
//     if (!email) {
//       setEmailError('Please enter an email address.');
//     }
//     if (!password) {
//       setPasswordError('Please enter a password.');
//     }
//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match.');
//     }

//     if (username && email && password && password === confirmPassword) {
//       // Add logic for user registration (e.g., send data to a server)
//       setUsernameError('');
//       setEmailError('');
//       setPasswordError('');
//       setConfirmPasswordError('');
//       console.log('Registration successful:', { username, email, password });
//       axios.post("http://localhost:8081/api/v1/auth/register", {name: username, email:email, password: password,confirmPassword:confirmPassword})
//           .then((response) => {
//               console.log(response)
//           })
//           .catch((error) => {
//               // Handle error here, for example:
//               console.error('Error registering user:', error);
//               // You can also update state to display a user-friendly error message
//           });
//     }
//   };

//   return (
//     <div className="loginmain">
//       <div className="login">
//         <div className="logincontainer">
//           <h1 id="logtit">Sign Up</h1>
//           <form onSubmit={handleSubmit}>
//             <TextField
//             className='textfieldlogin'
//               id="username"
//               label="Username"
//               variant="filled"
//               type="text"
//               onChange={handleUsernameChange}
//               required
//             />
//             <br />
//             {usernameError && <p className="error-message">{usernameError}</p>}
//             <br />
//             <TextField
//             className='textfieldlogin'
//               id="email"
//               label="Email"
//               variant="filled"
//               type="email"
//               onChange={handleEmailChange}
//               required
//             />
//             <br />
//             {emailError && <p className="error-message">{emailError}</p>}
//             <br />
//             <TextField
//             className='textfieldlogin'
//               id="password"
//               label="Password"
//               variant="filled"
//               type="password"
//               onChange={handlePasswordChange}
//               required
//             />
//             <br />
//             {passwordError && <p className="error-message">{passwordError}</p>}
//             <br />
//             <TextField
//               id="confirmPassword"
//               label="Confirm Password"
//               variant="filled"
//               type="password"
//               className='textfieldlogin'
//               onChange={handleConfirmPasswordChange}
//               required
//             />
//             <br />
//             {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
//             <br />
//             <Button type="submit" variant="contained">
//               Register
//             </Button>
//           </form>
//           <p>
//             Already have an account? <Link to="/Login">Log In</Link>
//           </p>
//         </div>
//         <div className="loginimage">
//           {/* You can add an image or other content for the SignUp page */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
// import './Signup.css';
import axios from 'axios';

// import './Register.css'
// import user from './assets/user.jpg';


function Forms() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Error, setError] = useState(false);

  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let hasError = false;
  
    setError(false); // Reset error state before validating
  
    if (Username.length === 0) {
      setError(true);
      hasError = true;
    }
  
    if (Email.length === 0 || !validateEmail(Email)) {
      setError(true);
      hasError = true;
    }
  
    if (Mobile.length !== 10) {
      setError(true);
      hasError = true;
    }
  
    if (Password.length === 0) {
      setError(true);
      hasError = true;
    }
  
    if (ConfirmPassword.length === 0 || Password !== ConfirmPassword) {
      setError(true);
      hasError = true;
    }
  // Only submit if there are no errors
      const formData = {
        name: Username,
        email: Email,
        password: Password,
        confirmPassword: ConfirmPassword,
      };
      console.log("hi");
      axios.post("http://localhost:8081/api/v1/auth/register", formData)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error('Error registering user:', error);
        });
      navigate("/login");
  };
  

  return (
    <div className="Registration">
      <Form className="form22" onSubmit={handleSubmit}>
        <div>
         
            <h3 style={{textAlign:"center"}}>Register Here</h3>
          <br />
          <div className="users">
            {/* <img src={user} alt=" " width={100} /> */}
            <span className="fa fa-user-o"></span>
          </div>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Username</Form.Label>
              <Form.Control
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
              />
              {Error && Username.length === 0 ? (
                <Form.Label className="error">Username can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Email</Form.Label>
              <Form.Control
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {Error && Email.length === 0 ? (
                <Form.Label className="error">Email can't be empty</Form.Label>
              ) : ''}
              {Error && Email.length > 0 && !validateEmail(Email) ? (
                <Form.Label className="error">Email should end with @gmail.com</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>

          
          <Form.Label className="input">Password</Form.Label>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Control
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {Error && Password.length === 0 ? (
                <Form.Label className="error">Password can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Confirm Password</Form.Label>
              <Form.Control
                placeholder="Re-Enter Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {Error &&
              (ConfirmPassword.length === 0 || Password !== ConfirmPassword) ? (
                <Form.Label className="error">Passwords do not match</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <center>
           <button id="button" className="me-1 btn btn btn-lg" type="submit">
              Submit
            </button> 
          </center>
        </div>
        <center>
          <Link to='/login'>Already have an account? Login here.</Link>
        </center>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Forms;
  
  
  
  