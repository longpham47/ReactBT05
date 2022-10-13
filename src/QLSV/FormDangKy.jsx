import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDangKy extends Component {


    // state = {
    //     value: { maSV: "", hoten: "", sdt: "", email: "" },
    //     error: { maSV: "", hoten: "", sdt: "", email: "" },
    // }


    inputChange = (event) => {
        let { value, name } = event.target;


        let newValue = { ...this.props.sinhVienChiTiec.value, [name]: value }



        let newError = { ...this.props.sinhVienChiTiec.error, }
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
        let action = {
            type: "HANDLE_CHANGE",
            sinhVienChiTiec: {
                value: newValue,
                error: newError,
            }
        }
        this.props.dispatch(action)





    }
    handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        for (let key in this.props.sinhVienChiTiec.error) {
            if (this.props.sinhVienChiTiec.error[key] !== "") {
                isValid = false;
                break;
            }
        }
        for (let key in this.props.sinhVienChiTiec.value) {
            if (this.props.sinhVienChiTiec.value[key] === "") {
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            alert("dữ liệu không hợp lệ")
            return;

        }

        let action = {
            type: "THEM_SV",
            sinhVien: this.props.sinhVienChiTiec.value,

        }
        this.props.dispatch(action)





    }




    render() {
        let { maSV, hoten, sdt, email } = this.props.sinhVienChiTiec.value;
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
                            <p className='text-danger'>{this.props.sinhVienChiTiec.error.maSV}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={hoten} type="text" name='hoten' className="form-control" placeholder="Họ Tên" />
                            <p className='text-danger'>{this.props.sinhVienChiTiec.error.hoten}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={sdt} typeinput="sdt" type="text" name='sdt' className="form-control" placeholder="số điện thoại" />
                            <p className='text-danger'>{this.props.sinhVienChiTiec.error.sdt}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={email} typeinput="email" type="text" name='email' className="form-control" placeholder="Email" />
                            <p className='text-danger'>{this.props.sinhVienChiTiec.error.email}</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-info mx-5' >thêm sinh viên</button>
                        <button type='button' className='btn btn-success mx-5' onClick={() => {
                            let action = {
                                type: "CAP_NHAT",
                                sinhVienCapNhat: this.props.sinhVienChiTiec.value,
                            }
                            this.props.dispatch(action)

                        }} >cập nhật sinh viên</button>
                    </div>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        sinhVienChiTiec: rootReducer.QLSVreducer.sinhVienChiTiec
    }
}




export default connect(mapStateToProps)(FormDangKy)