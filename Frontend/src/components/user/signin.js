import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../formcomponents/formcontrol'
import { Login, Register, ResetStatus, Verified } from '../../redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'
import axios from 'axios'
import LoadingComponent from '../basecomponents/loading'
import { useNavigate } from 'react-router-dom'
import { useEffect , useRef } from 'react'
import DownloadButton from '../basecomponents/downloadButton'
import DownloadNOCButton from '../basecomponents/NOCForm'
import Ribbon from '../../logo/ribbon.png'
import '../../css/ribbon.css'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useLocation } from 'react-router-dom';

const initialvalues = {
    username: '',
    password: ''
}

const validationSchema = Yup.object({

    username: Yup.string().required("Enter Register Email-ID").email("Invalid Username"),
    password: Yup.string().required("Enter Password")
})

async function loginUser(values) {
    const response = await axios.post('http://127.0.0.1:8000/login', values);
    return response.data;
}



function SignIn(props) {

    const navigate = useNavigate()
    const location = useLocation();
    const formikRef = useRef(null); 

    const [loading, setLoading] = React.useState(false);


    const mutation = useMutation(loginUser)

    const onSubmit = (values, { setFieldError }) => {
        setLoading(true)


        mutation.mutate(values, {


            onSuccess: (data) => {

                setLoading(false)

                props.login(data)
            },
            onError: (error) => {

                const errorData = error.response.data;
                // console.log(errorData);


                if (errorData.username) {
                    setFieldError('username', errorData.username);
                }
                else if (errorData.password) {
                    setFieldError('password', errorData.password);
                }

                else if (!errorData.active) {
                    setLoading(false)
                    props.register(errorData)

                    navigate('/verify')

                }

                setLoading(false)


            },
        })




    };

    useEffect(() => {



        if (props.isSuperuser) {
            navigate('admin/home')
        }

        else if (props.isLogin) {
            navigate('tansacs/jobs')
        }



    }, [props.isLogin]);


    useEffect(() => {

        props.resetForgot()


        props.ResetRegister()

        // Get the query parameters from the URL
        const params = new URLSearchParams(location.search);
        const usernameFromUrl = params.get('username');

        // If username is present in the URL, update the initialvalues
        if (usernameFromUrl) {
            const decodedUsername = decodeURIComponent(usernameFromUrl);
            if (formikRef.current) {
                formikRef.current.setFieldValue('username', decodedUsername);
            }
        }
    } ,[])



    return (
        <>

            <img src={Ribbon} alt="Ribbon" className="ribbon lg:block hidden" style={{
                marginTop: "177px"
            }} />

            <div className="grid grid-cols-5 mt-5 gap-20 relative">

                {loading ? (<LoadingComponent />) : null}
                <div className="col-span-5 flex flex-col justify-center items-center">
                    <h4 className=' text-custom-red font-bold mb-7  lg:text-[50px] md:text-[40px] text-[30px]'>Tamil Nadu State AIDS Control Society</h4>
                    <h4 className=' font-normal lg:text-[33px] md:text-[25px] text-[20px]' style={{
                        textShadow: "#5a32325c 3px 3px 4px"
                    }}>TANSACS RECRUITMENT PORTAL</h4>

                    <p className='text-custom-red font-bold mb-3  font8 border border-gray-400 p-1.5 rounded-full' >Before you log
                        in for the first time, please take a moment to <small className='text-blue-500 font-bold mb-3 font8 animate-colorChange'>REGISTER</small> your details</p>

                    <p>{props.isLogin}</p>
                    <div className='lg:w-2/5 md:w-3/5 w-full image_ribbon'>
                        <Formik
                            initialValues={initialvalues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit} 
                            innerRef={formikRef} 
                            >

                            {(formik) => (
                                <Form className='flex flex-col justify-center items-center mt-1'>

                                    <div className='w-2/3 mb-4'>
                                        <p className='text-custom-red font-bold mb-1 text-start'>Username</p>
                                        <FormikControl
                                            control='input'
                                            type='email'
                                            name='username'
                                            label="User Name"
                                            placeholder="Email-ID"
                                        />

                                    </div>
                                    <div className='w-2/3 mb-4'>
                                        <p className='text-custom-red font-bold mb-1 text-start'>Password</p>
                                        <FormikControl
                                            control='password'
                                            type='password'
                                            name='password'
                                            label="password"
                                            placeholder="ENTER YOUR PASSWORD"

                                        />
                                    </div>


                                    <div className="w-2/3 flex justify-between gap-2 mt-5 items-center flex-wrap mb-5">
                                        <div className='w-max'>
                                            <button type='submit' className="px-[30px] py-[3px] block group relative  w-max overflow-hidden rounded-lg bg-red-500 text-sm font-semibold text-white" >Login
                                                <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                            </button>
                                            {/* <a href="#" className="px-3 py-1 block group relative  w-full overflow-hidden rounded-lg bg-red-600 text-sm font-semibold text-white" >Login
                                                    <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                                </a> */}
                                        </div>
                                        <div className='w-max'>
                                            <Link to={'/signup'} className="px-[30px] py-[3px] block group relative  w-full overflow-hidden rounded-lg  bg-custom-red text-sm font-semibold text-white">
                                                Register
                                                <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                                            </Link>

                                        </div>
                                        
                                        <Link to={'/forgot'} className="text-custom-red font-semibold block text-sm underline mt-2">Forgot Password?</Link>

                                    </div>

                                </Form>
                            )}


                        </Formik>
                    </div>

                    <DownloadButton file_name="Recruitment.pdf" content="TANSACS Recruitment Eligibility Criteria.pdf" />
                    <DownloadButton file_name="NOC.pdf" content="NOC Form.pdf" />
                    <p className='text-custom-red font-bold mb-3 border border-gray-400 p-2 rounded-sm mt-5' style={{fontSize:15}}>Note: TANSACS requirement Details are given in the link above, please read carefully before applying.</p>
                    <p className='font-semibold text-lg font6 border border-red-400 rounded-md mb-2 p-1'>SELECTION OF THE CANDIDATE PURELY BASED ON THE CRITERIA</p>
                    <p className='font-semibold text-lg font6 border border-red-400 rounded-md p-1'>Receipt of Application will be closed on 00-00-000 at 00:00 PM</p>


                    <p className='lg:text-right text-center font-semibold text-lg font6 w-full'> <CopyrightIcon className='text-custom-red' /> 2023TANSACS, All Rights Reserved  </p>
                </div>



            </div>

        </>
    );
}


const mapStateToProps = state => {


    return {

        isLogin: state.login.isLogin,
        isSuperuser: state.login.is_superuser,

    }
}

const mapDispatchToProps = dispatch => {

    return {
        login: (data) => dispatch(Login(data)),
        register: (data) => dispatch(Register(data)),
        resetForgot: () => dispatch(ResetStatus()),
        ResetRegister: () => dispatch(Verified()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);