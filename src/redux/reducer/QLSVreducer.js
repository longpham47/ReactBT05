

const initialState = {
    mangSV: [
        { maSV: "sv01", hoten: "nguyên văn A", sdt: "123456799", email: "tesk@gamil.com" },
        { maSV: "sv02", hoten: "nguyên văn b", sdt: "123456799", email: "tesk@gamil.com" },

    ],
    sinhVienChiTiec: { maSV: "sv03", hoten: "nguyên văn c", sdt: "19999999", email: "tesk@gamil.com" },


}

export const QLSVreducer = (state = initialState, action) => {
    switch (action.type) {
        case "THEM_SV":


            state.mangSV = [...state.mangSV, action.sinhVien]

            return { ...state }
        case "XOA_SV":

            state.mangSV = state.mangSV.filter((sv) => {
                return sv.maSV !== action.taiKhoanXoa
            })

            return { ...state }


        case "XEM_CT":
                state.sinhVienChiTiec = action.svChiTiec



            return { ...state }


        default:
            return state
    }
}
