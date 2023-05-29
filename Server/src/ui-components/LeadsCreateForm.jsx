/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Leads } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LeadsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    f_name: "",
    L_name: "",
    Make: "",
    Model: "",
    reg_Number: "",
    Sa_price: "",
    deposit: "",
    ba_finance: "",
    t_amount: "",
    Blaoo_payment: "",
    m_payment: "",
    rate: "",
    sta_date: "",
    m_of_payment: "",
    figure: "",
    ageement: "",
    bebate: "",
    valueation: "",
    equity: "",
    Milege_start: "",
    Milege_now: "",
    phone: "",
    email: "",
    p_code: "",
    type: "",
    status: false,
  };
  const [f_name, setF_name] = React.useState(initialValues.f_name);
  const [L_name, setL_name] = React.useState(initialValues.L_name);
  const [Make, setMake] = React.useState(initialValues.Make);
  const [Model, setModel] = React.useState(initialValues.Model);
  const [reg_Number, setReg_Number] = React.useState(initialValues.reg_Number);
  const [Sa_price, setSa_price] = React.useState(initialValues.Sa_price);
  const [deposit, setDeposit] = React.useState(initialValues.deposit);
  const [ba_finance, setBa_finance] = React.useState(initialValues.ba_finance);
  const [t_amount, setT_amount] = React.useState(initialValues.t_amount);
  const [Blaoo_payment, setBlaoo_payment] = React.useState(
    initialValues.Blaoo_payment
  );
  const [m_payment, setM_payment] = React.useState(initialValues.m_payment);
  const [rate, setRate] = React.useState(initialValues.rate);
  const [sta_date, setSta_date] = React.useState(initialValues.sta_date);
  const [m_of_payment, setM_of_payment] = React.useState(
    initialValues.m_of_payment
  );
  const [figure, setFigure] = React.useState(initialValues.figure);
  const [ageement, setAgeement] = React.useState(initialValues.ageement);
  const [bebate, setBebate] = React.useState(initialValues.bebate);
  const [valueation, setValueation] = React.useState(initialValues.valueation);
  const [equity, setEquity] = React.useState(initialValues.equity);
  const [Milege_start, setMilege_start] = React.useState(
    initialValues.Milege_start
  );
  const [Milege_now, setMilege_now] = React.useState(initialValues.Milege_now);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [p_code, setP_code] = React.useState(initialValues.p_code);
  const [type, setType] = React.useState(initialValues.type);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setF_name(initialValues.f_name);
    setL_name(initialValues.L_name);
    setMake(initialValues.Make);
    setModel(initialValues.Model);
    setReg_Number(initialValues.reg_Number);
    setSa_price(initialValues.Sa_price);
    setDeposit(initialValues.deposit);
    setBa_finance(initialValues.ba_finance);
    setT_amount(initialValues.t_amount);
    setBlaoo_payment(initialValues.Blaoo_payment);
    setM_payment(initialValues.m_payment);
    setRate(initialValues.rate);
    setSta_date(initialValues.sta_date);
    setM_of_payment(initialValues.m_of_payment);
    setFigure(initialValues.figure);
    setAgeement(initialValues.ageement);
    setBebate(initialValues.bebate);
    setValueation(initialValues.valueation);
    setEquity(initialValues.equity);
    setMilege_start(initialValues.Milege_start);
    setMilege_now(initialValues.Milege_now);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setP_code(initialValues.p_code);
    setType(initialValues.type);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    f_name: [],
    L_name: [],
    Make: [],
    Model: [],
    reg_Number: [],
    Sa_price: [],
    deposit: [],
    ba_finance: [],
    t_amount: [],
    Blaoo_payment: [],
    m_payment: [],
    rate: [],
    sta_date: [],
    m_of_payment: [],
    figure: [],
    ageement: [],
    bebate: [],
    valueation: [],
    equity: [],
    Milege_start: [],
    Milege_now: [],
    phone: [{ type: "Phone" }],
    email: [{ type: "Required" }, { type: "Email" }],
    p_code: [],
    type: [],
    status: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          f_name,
          L_name,
          Make,
          Model,
          reg_Number,
          Sa_price,
          deposit,
          ba_finance,
          t_amount,
          Blaoo_payment,
          m_payment,
          rate,
          sta_date,
          m_of_payment,
          figure,
          ageement,
          bebate,
          valueation,
          equity,
          Milege_start,
          Milege_now,
          phone,
          email,
          p_code,
          type,
          status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Leads(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LeadsCreateForm")}
      {...rest}
    >
      <TextField
        label="F name"
        isRequired={false}
        isReadOnly={false}
        value={f_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name: value,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.f_name ?? value;
          }
          if (errors.f_name?.hasError) {
            runValidationTasks("f_name", value);
          }
          setF_name(value);
        }}
        onBlur={() => runValidationTasks("f_name", f_name)}
        errorMessage={errors.f_name?.errorMessage}
        hasError={errors.f_name?.hasError}
        {...getOverrideProps(overrides, "f_name")}
      ></TextField>
      <TextField
        label="L name"
        isRequired={false}
        isReadOnly={false}
        value={L_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name: value,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.L_name ?? value;
          }
          if (errors.L_name?.hasError) {
            runValidationTasks("L_name", value);
          }
          setL_name(value);
        }}
        onBlur={() => runValidationTasks("L_name", L_name)}
        errorMessage={errors.L_name?.errorMessage}
        hasError={errors.L_name?.hasError}
        {...getOverrideProps(overrides, "L_name")}
      ></TextField>
      <TextField
        label="Make"
        isRequired={false}
        isReadOnly={false}
        value={Make}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make: value,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.Make ?? value;
          }
          if (errors.Make?.hasError) {
            runValidationTasks("Make", value);
          }
          setMake(value);
        }}
        onBlur={() => runValidationTasks("Make", Make)}
        errorMessage={errors.Make?.errorMessage}
        hasError={errors.Make?.hasError}
        {...getOverrideProps(overrides, "Make")}
      ></TextField>
      <TextField
        label="Model"
        isRequired={false}
        isReadOnly={false}
        value={Model}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model: value,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.Model ?? value;
          }
          if (errors.Model?.hasError) {
            runValidationTasks("Model", value);
          }
          setModel(value);
        }}
        onBlur={() => runValidationTasks("Model", Model)}
        errorMessage={errors.Model?.errorMessage}
        hasError={errors.Model?.hasError}
        {...getOverrideProps(overrides, "Model")}
      ></TextField>
      <TextField
        label="Reg number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={reg_Number}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number: value,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.reg_Number ?? value;
          }
          if (errors.reg_Number?.hasError) {
            runValidationTasks("reg_Number", value);
          }
          setReg_Number(value);
        }}
        onBlur={() => runValidationTasks("reg_Number", reg_Number)}
        errorMessage={errors.reg_Number?.errorMessage}
        hasError={errors.reg_Number?.hasError}
        {...getOverrideProps(overrides, "reg_Number")}
      ></TextField>
      <TextField
        label="Sa price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Sa_price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price: value,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.Sa_price ?? value;
          }
          if (errors.Sa_price?.hasError) {
            runValidationTasks("Sa_price", value);
          }
          setSa_price(value);
        }}
        onBlur={() => runValidationTasks("Sa_price", Sa_price)}
        errorMessage={errors.Sa_price?.errorMessage}
        hasError={errors.Sa_price?.hasError}
        {...getOverrideProps(overrides, "Sa_price")}
      ></TextField>
      <TextField
        label="Deposit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={deposit}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit: value,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.deposit ?? value;
          }
          if (errors.deposit?.hasError) {
            runValidationTasks("deposit", value);
          }
          setDeposit(value);
        }}
        onBlur={() => runValidationTasks("deposit", deposit)}
        errorMessage={errors.deposit?.errorMessage}
        hasError={errors.deposit?.hasError}
        {...getOverrideProps(overrides, "deposit")}
      ></TextField>
      <TextField
        label="Ba finance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ba_finance}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance: value,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.ba_finance ?? value;
          }
          if (errors.ba_finance?.hasError) {
            runValidationTasks("ba_finance", value);
          }
          setBa_finance(value);
        }}
        onBlur={() => runValidationTasks("ba_finance", ba_finance)}
        errorMessage={errors.ba_finance?.errorMessage}
        hasError={errors.ba_finance?.hasError}
        {...getOverrideProps(overrides, "ba_finance")}
      ></TextField>
      <TextField
        label="T amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={t_amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount: value,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.t_amount ?? value;
          }
          if (errors.t_amount?.hasError) {
            runValidationTasks("t_amount", value);
          }
          setT_amount(value);
        }}
        onBlur={() => runValidationTasks("t_amount", t_amount)}
        errorMessage={errors.t_amount?.errorMessage}
        hasError={errors.t_amount?.hasError}
        {...getOverrideProps(overrides, "t_amount")}
      ></TextField>
      <TextField
        label="Blaoo payment"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Blaoo_payment}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment: value,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.Blaoo_payment ?? value;
          }
          if (errors.Blaoo_payment?.hasError) {
            runValidationTasks("Blaoo_payment", value);
          }
          setBlaoo_payment(value);
        }}
        onBlur={() => runValidationTasks("Blaoo_payment", Blaoo_payment)}
        errorMessage={errors.Blaoo_payment?.errorMessage}
        hasError={errors.Blaoo_payment?.hasError}
        {...getOverrideProps(overrides, "Blaoo_payment")}
      ></TextField>
      <TextField
        label="M payment"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={m_payment}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment: value,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.m_payment ?? value;
          }
          if (errors.m_payment?.hasError) {
            runValidationTasks("m_payment", value);
          }
          setM_payment(value);
        }}
        onBlur={() => runValidationTasks("m_payment", m_payment)}
        errorMessage={errors.m_payment?.errorMessage}
        hasError={errors.m_payment?.hasError}
        {...getOverrideProps(overrides, "m_payment")}
      ></TextField>
      <TextField
        label="Rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate: value,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.rate ?? value;
          }
          if (errors.rate?.hasError) {
            runValidationTasks("rate", value);
          }
          setRate(value);
        }}
        onBlur={() => runValidationTasks("rate", rate)}
        errorMessage={errors.rate?.errorMessage}
        hasError={errors.rate?.hasError}
        {...getOverrideProps(overrides, "rate")}
      ></TextField>
      <TextField
        label="Sta date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={sta_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date: value,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.sta_date ?? value;
          }
          if (errors.sta_date?.hasError) {
            runValidationTasks("sta_date", value);
          }
          setSta_date(value);
        }}
        onBlur={() => runValidationTasks("sta_date", sta_date)}
        errorMessage={errors.sta_date?.errorMessage}
        hasError={errors.sta_date?.hasError}
        {...getOverrideProps(overrides, "sta_date")}
      ></TextField>
      <TextField
        label="M of payment"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={m_of_payment}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment: value,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.m_of_payment ?? value;
          }
          if (errors.m_of_payment?.hasError) {
            runValidationTasks("m_of_payment", value);
          }
          setM_of_payment(value);
        }}
        onBlur={() => runValidationTasks("m_of_payment", m_of_payment)}
        errorMessage={errors.m_of_payment?.errorMessage}
        hasError={errors.m_of_payment?.hasError}
        {...getOverrideProps(overrides, "m_of_payment")}
      ></TextField>
      <TextField
        label="Figure"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={figure}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure: value,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.figure ?? value;
          }
          if (errors.figure?.hasError) {
            runValidationTasks("figure", value);
          }
          setFigure(value);
        }}
        onBlur={() => runValidationTasks("figure", figure)}
        errorMessage={errors.figure?.errorMessage}
        hasError={errors.figure?.hasError}
        {...getOverrideProps(overrides, "figure")}
      ></TextField>
      <TextField
        label="Ageement"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ageement}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement: value,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.ageement ?? value;
          }
          if (errors.ageement?.hasError) {
            runValidationTasks("ageement", value);
          }
          setAgeement(value);
        }}
        onBlur={() => runValidationTasks("ageement", ageement)}
        errorMessage={errors.ageement?.errorMessage}
        hasError={errors.ageement?.hasError}
        {...getOverrideProps(overrides, "ageement")}
      ></TextField>
      <TextField
        label="Bebate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bebate}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate: value,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.bebate ?? value;
          }
          if (errors.bebate?.hasError) {
            runValidationTasks("bebate", value);
          }
          setBebate(value);
        }}
        onBlur={() => runValidationTasks("bebate", bebate)}
        errorMessage={errors.bebate?.errorMessage}
        hasError={errors.bebate?.hasError}
        {...getOverrideProps(overrides, "bebate")}
      ></TextField>
      <TextField
        label="Valueation"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={valueation}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation: value,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.valueation ?? value;
          }
          if (errors.valueation?.hasError) {
            runValidationTasks("valueation", value);
          }
          setValueation(value);
        }}
        onBlur={() => runValidationTasks("valueation", valueation)}
        errorMessage={errors.valueation?.errorMessage}
        hasError={errors.valueation?.hasError}
        {...getOverrideProps(overrides, "valueation")}
      ></TextField>
      <TextField
        label="Equity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={equity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity: value,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.equity ?? value;
          }
          if (errors.equity?.hasError) {
            runValidationTasks("equity", value);
          }
          setEquity(value);
        }}
        onBlur={() => runValidationTasks("equity", equity)}
        errorMessage={errors.equity?.errorMessage}
        hasError={errors.equity?.hasError}
        {...getOverrideProps(overrides, "equity")}
      ></TextField>
      <TextField
        label="Milege start"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Milege_start}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start: value,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.Milege_start ?? value;
          }
          if (errors.Milege_start?.hasError) {
            runValidationTasks("Milege_start", value);
          }
          setMilege_start(value);
        }}
        onBlur={() => runValidationTasks("Milege_start", Milege_start)}
        errorMessage={errors.Milege_start?.errorMessage}
        hasError={errors.Milege_start?.hasError}
        {...getOverrideProps(overrides, "Milege_start")}
      ></TextField>
      <TextField
        label="Milege now"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Milege_now}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now: value,
              phone,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.Milege_now ?? value;
          }
          if (errors.Milege_now?.hasError) {
            runValidationTasks("Milege_now", value);
          }
          setMilege_now(value);
        }}
        onBlur={() => runValidationTasks("Milege_now", Milege_now)}
        errorMessage={errors.Milege_now?.errorMessage}
        hasError={errors.Milege_now?.hasError}
        {...getOverrideProps(overrides, "Milege_now")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone: value,
              email,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email: value,
              p_code,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="P code"
        isRequired={false}
        isReadOnly={false}
        value={p_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code: value,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.p_code ?? value;
          }
          if (errors.p_code?.hasError) {
            runValidationTasks("p_code", value);
          }
          setP_code(value);
        }}
        onBlur={() => runValidationTasks("p_code", p_code)}
        errorMessage={errors.p_code?.errorMessage}
        hasError={errors.p_code?.hasError}
        {...getOverrideProps(overrides, "p_code")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <SwitchField
        label="Status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={status}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              f_name,
              L_name,
              Make,
              Model,
              reg_Number,
              Sa_price,
              deposit,
              ba_finance,
              t_amount,
              Blaoo_payment,
              m_payment,
              rate,
              sta_date,
              m_of_payment,
              figure,
              ageement,
              bebate,
              valueation,
              equity,
              Milege_start,
              Milege_now,
              phone,
              email,
              p_code,
              type,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
