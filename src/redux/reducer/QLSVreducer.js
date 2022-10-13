

const initialState = {
    mangSV: [
        { maSV: "sv01", hoten: "nguyên văn A", sdt: "123456799", email: "tesk@gamil.com" },
        { maSV: "sv02", hoten: "nguyên văn b", sdt: "123456799", email: "tesk@gamil.com" },

    ],

    sinhVienChiTiec: {
        value: { maSV: "", hoten: "", sdt: "", email: "" },
        error: { maSV: "", hoten: "", sdt: "", email: "" },
    }

}

export const QLSVreducer = (state = initialState, action) => {
    switch (action.type) {

        case "HANDLE_CHANGE":
            state.sinhVienChiTiec = action.sinhVienChiTiec;




            return { ...state }
        case "THEM_SV":


            state.mangSV = [...state.mangSV, action.sinhVien]

            return { ...state }
        case "XOA_SV":

            state.mangSV = state.mangSV.filter((sv) => {
                return sv.maSV !== action.taiKhoanXoa
            })

            return { ...state }


        case "XEM_CT":
            state.sinhVienChiTiec.value = action.svChiTiec
            state.sinhVienChiTiec = { ...state.sinhVienChiTiec }


            return { ...state }
        case "CAP_NHAT":
            
                let svFindIndex = state.mangSV.findIndex(sv => sv.maSV === action.sinhVienCapNhat.maSV)
                if (svFindIndex !== -1) {
                    state.mangSV[svFindIndex] = action.sinhVienCapNhat;

                }
                state.mangSV = [...state.mangSV]

            return { ...state }

        default:
            return state
    }
}
