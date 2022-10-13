import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableSinhVien extends Component {



    rederMangSV = () => {
        let stt = 1;

        return this.props.mangSV.map((sv) => {
            return <tr key={sv.maSV}>
                <td>{stt++}</td>
                <td>{sv.maSV}</td>
                <td>{sv.hoten}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
                <td>
                    <button onClick={() => {
                        let action = {
                            type: "XOA_SV",
                            taiKhoanXoa: sv.maSV,
                        }
                        this.props.dispatch(action);

                    }} className='btn btn-info'> xoá </button>
                    <button onClick={()=>{
                        let action ={
                            type :"XEM_CT",
                            svChiTiec : sv,
                        }
                        this.props.dispatch(action)
                    }} className='btn btn-danger'> xem </button>
                </td>
            </tr>
        })
    }


    render() {
        return (
            <div className='py-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>stt</th>
                            <th>mã sinh viên</th>
                            <th>tên sinh viên</th>
                            <th>số điện thoại</th>
                            <th>email</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.rederMangSV()}
                    </tbody>
                </table>

            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        mangSV: rootReducer.QLSVreducer.mangSV
    }
}

export default connect(mapStateToProps)(TableSinhVien)
