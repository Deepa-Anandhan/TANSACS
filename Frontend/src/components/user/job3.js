
import { Link } from 'react-router-dom'
import ApplyButton from '../basecomponents/ApplySuggestion';
import { connect } from 'react-redux'
import { removeexp_age } from '../../redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { DATA_MONITORING_OFFICER } from '../initialValues/JobPost'


function Job3(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.isLogin) {
            navigate('/')
        }
    }, [props.isLogin])

    useEffect(() => {

        props.removeexp_age()
    })


    return (
        <>
            <div className='mt-5'>
                <h4 className='text-custom-red font-bold mb-7  lg:text-[50px] md:text-[40px] text-[35px]'>Tamil Nadu State AIDS Control Society</h4>


                <h4 className='text-2xl my-5 underline font-semibold'> DATA MONITORING AND DOCUMENTATION OFFICER (DMDO) - 1 POST</h4>


            </div>

            <div className="lg:col-span-1 col-span-3">


                <div className="block w-full overflow-x-auto rounded-t-md">
                    <table className="items-center bg-transparent w-full  border-collapse border border-gray-400">
                        <caption className="caption-top bg-red-600 p-4 font-semibold text-white">
                            CONSOLIDATED MONTHLY REMUNERATION
                            ( PER MONTH ) RS 46,800/-
                        </caption>
                        {/* <thead>
                                <tr className="bg-gray-200 border-2 border-gray-400">
                                    <th className="border-gray-400  text-center text-red-500 align-middle border-2 border-solid  py-3 text-xs uppercase  whitespace-nowrap font-semibold">
                                        S.NO
                                    </th>
                                    <th className="border-gray-400  text-center text-red-500 align-middle border-2 border-solid  py-3 text-xs uppercase  whitespace-nowrap font-semibold">
                                        DISTRICT
                                    </th>
                                    <th className="border-gray-400  text-center text-red-500 align-middle border-2 border-solid  py-3 text-xs uppercase  whitespace-nowrap font-semibold">
                                        POST
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th className="border-2 border-gray-400 text-center align-middle  text-xs whitespace-nowrap  px-7 py-2  ">
                                        1
                                    </th>
                                    <td className="border-2 border-gray-400 text-center  align-middle  text-xs whitespace-nowrap px-7 py-2 ">
                                        THENI
                                    </td>
                                    <td className="border-2 border-gray-400 text-center  align-center  text-xs whitespace-nowrap px-7 py-2">
                                        1
                                    </td>

                                </tr>



                            </tbody> */}

                    </table>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-5 ">

                <div className="lg:col-span-3 col-span-3">
                    <div className="border border-slate-400 rounded-b-md p-5 flex flex-col gap-5 text-start">
                        <p className="text-base font-bold uppercase">Qualification:</p>
                        <p>Master's Degree in Public Health / Healthcare Management /
                            Healthcare Administration / Social Science / Applied Epidemiology
                            / Demography / Statistics / Bio-Statistics / Population Sciences /
                            Mathematics / Economics
                        </p>

                        <p className="text-base font-bold uppercase">Experience:</p>
                        <ul className="list-disc mx-4">
                            <li>One year's experience for candidates with Master's Degree
                                in Public Health / Healthcare Management / Healthcare
                                Administration / Applied Epidemiology </li>

                            <li>Three year's experience in Public Health for Bachelor's
                                Degree in Medical and Allied Sciences / Masters in Social
                                Science / Psychology / Demography / Statistics /
                                Bio-Statistics / Population Sciences with a minimum of one
                                year of experience in HIV/AIDS sector.
                            </li>
                        </ul>

                        <p className="text-base font-bold uppercase">Desirable:</p>
                        <ul className="list-disc mx-4">
                            <li>The suitable candidate will be familiar with the
                                organization and functions of the State and local public
                                health systems / State AIDS Control Societies
                            </li>
                            <li>Excellent written and verbal communication skills in local
                                languages and English (Speaking, Reading and Writing)
                                and the ability to work well in an inter-disciplinary team.
                            </li>
                            <li>Strong analytical, Advocacy and negotiation skills</li>
                            <li>Willingness to travel extensively.</li>
                            <li> Other expertise includes: </li>
                            <ul className="list-disc mx-8 list-none">
                                <li>→Programme Management Skills</li>
                                <li>→Good knowledge of computers</li>
                            </ul>

                        </ul>



                        <p className="text-base font-bold uppercase">Age limit:</p>

                        <ul className="list-disc mx-4">
                            <li> For the existing employees of NACO/TANSACS,
                                the upper age limit is 50 years as on 01.07.2024. For other
                                candidates, upper age limit is 45 years as on 01.07.2024</li>

                        </ul>

                    </div>
                </div>



            </div>

            <div className='flex justify-center mt-5'>
                <ApplyButton position={DATA_MONITORING_OFFICER} main={true} min_age={45} emin_age={50} link={'/tansacs/data_monitoring_officer/apply'} />

                {/* <Link to={'/data_monitoring_officer/apply'} className="px-3 py-1 block group relative  w-max overflow-hidden rounded-lg bg-red-600 text-sm font-semibold text-white">
                        Apply
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                    </Link> */}
            </div>

        </>
    );
}

const mapStateToProps = state => {


    return {

        isLogin: state.login.isLogin,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        removeexp_age: () => dispatch(removeexp_age())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Job3);