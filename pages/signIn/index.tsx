import { useRef, useState, useEffect } from 'react'
import { Button, Box, Grid, Divider, Paper, Link, Typography, InputAdornment, FormControl } from '@material-ui/core'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Signin.styles'
import Hidden from '@material-ui/core/Hidden'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@mui/material/TextField';

// import { userService } from '../../service/index'

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: {}
  }
}



const SignIn = ({ }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const classes = styles()
  const router = useRouter()
  const [form, setForm] = useState(true)
  const [base64, setBase64] = useState('')
  const [appNameHome, setAppNameHome] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitSignInForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.push({ pathname: `/main` })
    // setUsername(username.trim())
    // setPassword(password.trim())

    // if (!formValidator(username, password)) { return }

    // sendRequestSignIn(username, password)
  }

//   useEffect(() => {
//     // redirect to home if already logged in
//     if (userService.userValue) {
//         router.push('/');
//     }
// }, []);

  return (
    <Grid container direction="row" justifyContent='flex-start' alignItems="center">
        <Grid item xs={12} lg={4}>
            <Paper className={classes.itemDiv}>
              <Box className={classes.item_box} >
                <Box display='inline-block'>
                  <img src="./AIF_Purple_noncrop.png" height="202" />
                  <Box style={{ fontSize: '32px', fontWeight: 'bolder', color: '#5D40D2' }}>
                    Data Sensing System
                  </Box>
                </Box>
              </Box>
              <form onSubmit={submitSignInForm} className={classes.fullForm}>
                <Box className={classes.item_box}>
                  <FormControl fullWidth>
                    <Typography className={classes.sub_headline_typo} />
                    <TextField
                      id="outlined-size-normal"
                      label="Username"
                      inputProps={{
                        maxLength: 255,
                      }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircleOutlinedIcon color="primary" /></InputAdornment>,
                      }}
                      onChange={(e) => setUsername(e.target.value)}
                     
                    />

                    <Typography className={classes.sub_headline_typo} />
                    <TextField
                      data-cy="sign_in_password_field"
                      id="password-input"
                      label={`Password`}
                      variant="outlined"
                      type="password"
                      // inputRef={passwordInput}
                      onChange={(e) => setPassword(e.target.value)}
                      inputProps={{
                        maxLength: 255,
                      }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><LockOutlinedIcon color="primary" /></InputAdornment>,
                      }}
                    />
                  </FormControl>
                </Box>

                <Box className={classes.item_box}></Box>

                <Box className={classes.login_box}>
                  <Button
                    type="submit"
                    variant="contained"
                    data-cy="sign_in_form_button"
                    color="primary"
                    onClick={submitSignInForm}
                    className={classes.login_button}
                  >
                    {`Sign In`}
                  </Button>
                </Box>

                <Box className={classes.item_box}>
                  {/* <img src='/icons/icon_lock_forgotpass.png'/> */}
                  <Link
                    href="#"
                    data-cy="forgot_password"
                  // onClick={toForgotPassword}
                  >
                    {`Forgot your password?`}
                  </Link>
                </Box>
              </form>
            </Paper> 
        </Grid>
          <Hidden mdDown>
            <Grid item xs={4} lg={8} className={classes.grid_item}>
              <img src="./bg_login.jpg" style={{ width: '100%', height: '100%' }} />
            </Grid>
          </Hidden>
    </Grid>
  )
}

export default SignIn
