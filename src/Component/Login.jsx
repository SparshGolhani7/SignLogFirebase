import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function Login() {
  const validationSchema = Yup.object({
    email:Yup.string().email("Valid email is req").required("Email is required"),
    password:Yup.string().min(6,"min 6 digits or char req").required("password is required")
  })

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema,

     onSubmit: (values) => {
     
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("login scsfull")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
      },
    });


  //   onSubmit:async(values)=>{
  //     console.log("logined",values);
  //     await getFromFirebase(values);
  //     resetForm();
  //   },
  // });

  // const getFromFirebase = async(values)=>{
  //   try{
  //     const res = await fetch( "https://reactsignuplogin-default-rtdb.firebaseio.com/ReactForm.json");
  //     // console.log("surbhi",res)
  //     const data  = await res.json();
  //     // console.log("susmita",data)

  //     const users = Object.values(data);    // funciton of js for convert obj in arr
  //     // console.log("sparsh",users)
  //     const user = users.find((u)=> u.email ===values.email && u.password===values.password);
  //     if (user){
  //       alert("login scsfull")
  //     }else{
  //       alert("invalid email or pass")
  //     }
  //   } catch(error){
  //     console.log("err",error);
  //     alert("err occured... plz try again")
  //   }
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>

            <div className='mb-4'>
              <label htmlFor='email'>Email</label>
              <input
              id='email'
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="enter ur email"
              className="form-control"
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{color:"red"}}>{formik.errors.email}</div>
              )}
            </div>
            <div className='mb-4'>
              <label htmlFor='password'>Password</label>
              <input 
              id='password'
              type={"password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="enter ur password"
              className='form-control'
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{color:"red"}}>{formik.errors.password}</div>
              )}
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
        </div>
        </div> 
  )
}
export default Login