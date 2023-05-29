/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Leads } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeadsUpdateFormInputValues = {
    f_name?: string;
    L_name?: string;
    Make?: string;
    Model?: string;
    reg_Number?: number;
    Sa_price?: number;
    deposit?: number;
    ba_finance?: number;
    t_amount?: number;
    Blaoo_payment?: number;
    m_payment?: number;
    rate?: number;
    sta_date?: string;
    m_of_payment?: number;
    figure?: number;
    ageement?: number;
    bebate?: number;
    valueation?: number;
    equity?: number;
    Milege_start?: number;
    Milege_now?: number;
    phone?: string;
    email?: string;
    p_code?: string;
    type?: string;
    status?: boolean;
};
export declare type LeadsUpdateFormValidationValues = {
    f_name?: ValidationFunction<string>;
    L_name?: ValidationFunction<string>;
    Make?: ValidationFunction<string>;
    Model?: ValidationFunction<string>;
    reg_Number?: ValidationFunction<number>;
    Sa_price?: ValidationFunction<number>;
    deposit?: ValidationFunction<number>;
    ba_finance?: ValidationFunction<number>;
    t_amount?: ValidationFunction<number>;
    Blaoo_payment?: ValidationFunction<number>;
    m_payment?: ValidationFunction<number>;
    rate?: ValidationFunction<number>;
    sta_date?: ValidationFunction<string>;
    m_of_payment?: ValidationFunction<number>;
    figure?: ValidationFunction<number>;
    ageement?: ValidationFunction<number>;
    bebate?: ValidationFunction<number>;
    valueation?: ValidationFunction<number>;
    equity?: ValidationFunction<number>;
    Milege_start?: ValidationFunction<number>;
    Milege_now?: ValidationFunction<number>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    p_code?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeadsUpdateFormOverridesProps = {
    LeadsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    f_name?: PrimitiveOverrideProps<TextFieldProps>;
    L_name?: PrimitiveOverrideProps<TextFieldProps>;
    Make?: PrimitiveOverrideProps<TextFieldProps>;
    Model?: PrimitiveOverrideProps<TextFieldProps>;
    reg_Number?: PrimitiveOverrideProps<TextFieldProps>;
    Sa_price?: PrimitiveOverrideProps<TextFieldProps>;
    deposit?: PrimitiveOverrideProps<TextFieldProps>;
    ba_finance?: PrimitiveOverrideProps<TextFieldProps>;
    t_amount?: PrimitiveOverrideProps<TextFieldProps>;
    Blaoo_payment?: PrimitiveOverrideProps<TextFieldProps>;
    m_payment?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    sta_date?: PrimitiveOverrideProps<TextFieldProps>;
    m_of_payment?: PrimitiveOverrideProps<TextFieldProps>;
    figure?: PrimitiveOverrideProps<TextFieldProps>;
    ageement?: PrimitiveOverrideProps<TextFieldProps>;
    bebate?: PrimitiveOverrideProps<TextFieldProps>;
    valueation?: PrimitiveOverrideProps<TextFieldProps>;
    equity?: PrimitiveOverrideProps<TextFieldProps>;
    Milege_start?: PrimitiveOverrideProps<TextFieldProps>;
    Milege_now?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    p_code?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type LeadsUpdateFormProps = React.PropsWithChildren<{
    overrides?: LeadsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    leads?: Leads;
    onSubmit?: (fields: LeadsUpdateFormInputValues) => LeadsUpdateFormInputValues;
    onSuccess?: (fields: LeadsUpdateFormInputValues) => void;
    onError?: (fields: LeadsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeadsUpdateFormInputValues) => LeadsUpdateFormInputValues;
    onValidate?: LeadsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LeadsUpdateForm(props: LeadsUpdateFormProps): React.ReactElement;
