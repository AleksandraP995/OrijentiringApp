import { useFormik } from "formik";
import * as Yup from "yup";

export default function useFormikHandler() {

    const formik = useFormik({
        initialValues: {
          name: "",
          surname: "",
          email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be 3 characters or more')
                .required('Required'),
            surname: Yup.string()
                .min(3, 'Must be 3 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .min(3, "Must be more than 3 characters long")
                .required('Required'),
          }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return formik;
}