import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDangKy extends Component {


    state = {
        value: { maSV: "", hoten: "", sdt: "", email: "" },
        error: { maSV: "", hoten: "", sdt: "", email: "" },
    }


    inputChange = (event) => {
        let { value, name } = event.target;


        let newValue = { ...this.state.value, [name]: value }
        console.log(newValue);


        let newError = { ...this.state.error, }
        let errorMSG = "";
        if (value.trim() == "") {
            errorMSG = "nội dung không được để trống";
        }


        //error email

        let typeVal = event.target.getAttribute("typeinput")
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // let regexSDT =  /^[0-9]+$/;
        // if(typeVal == "sdt"){
        //     if(!regexSDT.test(value) == "sdt"){
        //         errorMSG = "sdt không đúng đinh dạng";
        //     }
        // }

        if (typeVal == "email") {
            if (!regex.test(value)) {
                errorMSG = "email không đúng đinh dạng";
            }
        }



        newError[name] = errorMSG


        this.setState({
            value: newValue,
            error: newError,

        })



    }
    handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        for (let key in this.state.error) {
            if (this.state.error[key] !== "") {
                isValid = false;
                break;
            }
        }
        for (let key in this.state.value) {
            if (this.state.value[key] === "") {
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            alert("dữ liệu không hợp lệ")
            return;

        }

        let action ={
            type:"THEM_SV",
            sinhVien :this.state.value,

        }
        this.props.dispatch(action)





    }




    render() {
        let {maSV,hoten,sdt,email} = this.props.sinhVienChiTiec
        return (
            <div className='py-5'>
                <form onSubmit={(event) => {
                    this.handleSubmit(event);
                }}>
                    <div className="row">
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={maSV} type="text" name='maSV' className="form-control" placeholder="mã sinh viên" />
                            <p className='text-danger'>{this.state.error.maSV}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }}  value={hoten} type="text" name='hoten' className="form-control" placeholder="Họ Tên" />
                            <p className='text-danger'>{this.state.error.hoten}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={sdt} typeinput="sdt" type="text" name='sdt' className="form-control" placeholder="số điện thoại" />
                            <p className='text-danger'>{this.state.error.sdt}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={email} typeinput="email" type="text" name='email' className="form-control" placeholder="Email" />
                            <p className='text-danger'>{this.state.error.email}</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-info mx-5' >thêm sinh viên</button>
                        <button className='btn btn-success mx-5' >cập nhật sinh viên</button>
                    </div>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        sinhVienChiTiec : rootReducer.QLSVreducer.sinhVienChiTiec
    }
}




export default connect(mapStateToProps)(FormDangKy)