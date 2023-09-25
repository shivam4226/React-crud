import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FunctionAddUser } from '../Redux/Action';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    role: Yup.string().required('Role is required'),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      role: 'staff',
    },
    validationSchema,
    onSubmit: (values) => {
      const userobj = { ...values };
      dispatch(FunctionAddUser(userobj));
      navigate('/user');
    },
  });

  return (
    <div className="addUser px-5 py-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: 'left' }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: 'left' }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-danger">{formik.errors.name}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-danger">{formik.errors.phone}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Role</label>
                  <select
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  >
                    <option value="male">Male</option>
                    <option value="femail">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {formik.touched.role && formik.errors.role && (
                    <div className="text-danger">{formik.errors.role}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: 'right' }}>
            <button
              className="btn btn-primary m-2"
              type="submit"
              onClick={formik.handleSubmit}
            >
              Submit
            </button>
            <Link className="btn btn-danger" to="/user">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
