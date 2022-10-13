import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableSinhVien from './TableSinhVien'

export default class QLSV extends Component {
  render() {
    return (
      <div className='container py-5'>
        <h1> thông tin sinh viên</h1>
        <FormDangKy/>
        <h1>danh sách sinh viên</h1>
        <TableSinhVien/>
        
      </div>
    )
  }
}
