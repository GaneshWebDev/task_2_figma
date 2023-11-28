function UserDetails({user,fun,index}){
    return(
        <>
        <div className=" flex-column d-none d-md-flex  justify-content-start align-items-center  w-25 h-75 rounded " style={{marginLeft:'100px',backgroundColor:'rgba(236, 236, 236, 1)'}}>
             <div className="d-flex flex-column justify-content-center align-items-center w-100 bg-info rounded-top" style={{height:'10%' ,}}>
                <span className="fw-bold p-2" style={{fontSize:'1.3rem',color:'white'}}>USERS DETAILS</span>
             </div>
            <img src={user.avatar} onError={() => fun(index)} className="rounded-circle bg-secondary mt-3"  style={{height:'100px' }} />
            <span className="mt-2 fw-bold">{user.profile.username}</span>
            <p className="d-flex  align-items-start mt-2 w-75  rounded p-2" style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1) tex',marginLeft:'10px',textAlign:'start'}}> {user.Bio}</p>
            <div className="d-flex flex-column  align-items-start w-75 mt-2">
                <span>Full Name</span>
                <div className="d-flex w-100 justify-content-start align-items-center rounded ml-2"  style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1)'}}>
                    <span style={{marginLeft:'5px'}}>{user.profile.firstName}{user.profile.lastName}</span>
                </div>
            </div>
            <div  className="d-flex flex-column  align-items-start w-75 mt-2">
                <span>Job Title</span>
                <div  className="d-flex w-100 align-items-center rounded "  style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1)'}}>
                    <span style={{marginLeft:'5px'}}>{user.jobTitle}</span>
                </div>
            </div>
            <div  className="d-flex flex-column  align-items-start w-75 mt-2">
                <span>Email</span>
                <div  className="d-flex w-100  align-items-center rounded"  style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1)'}}>
                    <span style={{marginLeft:'5px'}}>{user.profile.email}</span>
                </div>
            </div>
        </div>
        <div className="d-flex flex-column d-md-none  justify-content-start align-items-center  w-75  rounded mt-3" style={{backgroundColor:'rgba(236, 236, 236, 1)',height:'65%'}}>
             <div className="d-flex flex-column justify-content-center align-items-center w-100 bg-info rounded-top" style={{height:'10%' ,}}>
                <span className="fw-bold p-2" style={{fontSize:'1.3rem',color:'white'}}>USERS DETAILS</span>
             </div>
            <img src={user.avatar} onError={() => fun(index)} className="rounded-circle bg-secondary mt-3"  style={{height:'50px' }} />
            <span className="mt-2 fw-bold">{user.profile.username}</span>
            <p className="d-flex  align-items-start mt-1 w-75  rounded p-2" style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1) tex',marginLeft:'0px',textAlign:'start'}}>{user.Bio}</p>
            <div className="d-flex flex-column  align-items-start w-75 mt-2">
                <span>Full Name</span>
                <div className="d-flex w-100 justify-content-start align-items-center rounded ml-1"  style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1)'}}>
                    <span style={{marginLeft:'5px'}}>{user.profile.firstName}{user.profile.lastName}</span>
                </div>
            </div>
            <div  className="d-flex flex-column  align-items-start w-75 mt-1">
                <span>Job Title</span>
                <div  className="d-flex w-100 align-items-center rounded "  style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1)'}}>
                    <span style={{marginLeft:'5px'}}>{user.jobTitle}</span>
                </div>
            </div>
            <div  className="d-flex flex-column  align-items-start w-75 mt-1">
                <span>Email</span>
                <div  className="d-flex w-100  align-items-center rounded"  style={{backgroundColor:'rgba(219, 219, 219, 1)',color:'rgba(108, 108, 108, 1)'}}>
                    <span style={{marginLeft:'5px'}}>{user.profile.email}</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserDetails;
