import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Logout, removeexp_age } from '../../redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Ribbon from '../../logo/ribbon.png'




function Jobs(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.isLogin) {
            navigate('/')
        }
    }, [props.isLogin])

    useEffect(() => {

        props.removeexp_age()
    }, [])

    return (
        <>
            <div className='mt-5'>
                <h4 className='text-custom-red font-bold mb-7  lg:text-[50px] md:text-[40px] text-[35px]'>Tamil Nadu State AIDS Control Society</h4>

                <div className='flex flex-col gap-2 mb-2'>
                    <p className='font-semibold lg:text-[18px] md:text-[10px] text-[15px]'>Tamil Nadu State AIDS Control Society (TANSACS), Chennai invites applications from eligible candidates
                        with the qualifications / requirements mentioned with recent passport size photographs with self
                        attested Xerox copies of Mark sheet (10th, +2, UG degree & PG degree), Degree Certificates & Experience certificates
                        (to be uploaded) for the following contractual posts on consolidated monthly remuneration and purely temporary.
                    </p>

                </div>


            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10/12 m-auto grid lg:grid-cols-11 grid-cols-1 justify-center  gap-1'>
                    <div className="col-span-4 flex flex-col gap-4 lg:mt-14 mt-0 order-2 lg:order-2">
                        <div className='w-full'>
                            <Link to={'/tansacs/cluster_manager'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">
                                Cluster Programme Manager
                                (CPM) - 7 Posts
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                            </Link>

                        </div>
                        <div className='w-full'>
                            <Link to={'/tansacs/clinical_officer'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">

                                Clinical Services Officer (CSO) -
                                2 Posts
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                            </Link>

                        </div>
                        <div className='w-full'>
                            <Link to={'/tansacs/data_monitoring_officer'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">
                                Data Monitoring and
                                Documentation Officer (DMDO) -
                                1 Post

                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                            </Link>

                        </div>
                        <div className='w-full'>
                            <Link to={'/tansacs/deputy_director_ls'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">
                                Deputy Director (LS) - 1 Post
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                            </Link>

                        </div>

                    </div>
                    <div className="col-span-3 order-1 lg:order-2 flex flex-col justify-between">
                        <p className='text-red-600 mb-2 font-bold underline'>Please Select Your Job Post</p>
                        <img src={Ribbon} alt="ribbon" className='block w-full h-3/4' />

                    </div>
                    <div className="col-span-4 flex flex-col gap-4 lg:mt-14 mt-3 order-3">
                        {/* <Link to={'/tansacs/deputy_director_si'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">
                            Deputy Director (SI) - 1 Post
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                        </Link> */}

                        <Link to={'/tansacs/assistant_director_ictc'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">
                            Assistant Director (BSD) / (ICTC)
                            - 1 Post
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                        </Link>

                        <Link to={'/tansacs/assistant_director_ti'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">
                            Assistant Director (Prevention) /
                            (TI) - 2 Posts

                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                        </Link>

                        <Link to={'/tansacs/assistant_director_iec'} className="p-2 block group relative  w-full overflow-hidden rounded-2xl bg-red-600 text-sm font-semibold text-white">
                            Assistant Director (IEC) - 1 Post
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>

                        </Link>



                    </div>



                </div>


            </div>
            <div className='mt-6 flex flex-col justify-center items-center'>
                <p className='py-1 px-3 block group relative  w-max overflow-hidden rounded-md bg-red-600 text-sm font-semibold text-white cursor-pointer ' onClick={props.logout}>logout</p>

            </div>
        </>
    );
}

const mapStateToProps = state => {


    return {

        isLogin: state.login.isLogin,
        state: state
    }
}

const mapDispatchToProps = dispatch => {

    return {
        logout: () => dispatch(Logout()),
        removeexp_age: () => dispatch(removeexp_age())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
