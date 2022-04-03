import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  bigint: any;
  jsonb: any;
  smallint: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_Users = {
  __typename?: 'auth_users';
  aud?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  is_super_admin?: Maybe<Scalars['Boolean']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  raw_app_meta_data?: Maybe<Scalars['jsonb']>;
  raw_user_meta_data?: Maybe<Scalars['jsonb']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_token?: Maybe<Scalars['String']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_App_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_User_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Append_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  aud?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_change?: InputMaybe<String_Comparison_Exp>;
  email_change_confirm_status?: InputMaybe<Smallint_Comparison_Exp>;
  email_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email_change_token_current?: InputMaybe<String_Comparison_Exp>;
  email_change_token_new?: InputMaybe<String_Comparison_Exp>;
  email_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  invited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_change?: InputMaybe<String_Comparison_Exp>;
  phone_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone_change_token?: InputMaybe<String_Comparison_Exp>;
  phone_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  raw_app_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_user_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  reauthentication_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  reauthentication_token?: InputMaybe<String_Comparison_Exp>;
  recovery_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  recovery_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Users_Delete_At_Path_Input = {
  raw_app_meta_data?: InputMaybe<Array<Scalars['String']>>;
  raw_user_meta_data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Users_Delete_Elem_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['Int']>;
  raw_user_meta_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Users_Delete_Key_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['String']>;
  raw_user_meta_data?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  aud?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_change?: InputMaybe<Scalars['String']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  email_change_token_current?: InputMaybe<Scalars['String']>;
  email_change_token_new?: InputMaybe<Scalars['String']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  instance_id?: InputMaybe<Scalars['uuid']>;
  invited_at?: InputMaybe<Scalars['timestamptz']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_change?: InputMaybe<Scalars['String']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  phone_change_token?: InputMaybe<Scalars['String']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']>;
  reauthentication_token?: InputMaybe<Scalars['String']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']>;
  recovery_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  aud?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_token?: Maybe<Scalars['String']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  aud?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_token?: Maybe<Scalars['String']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  aud?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_change?: InputMaybe<Order_By>;
  email_change_confirm_status?: InputMaybe<Order_By>;
  email_change_sent_at?: InputMaybe<Order_By>;
  email_change_token_current?: InputMaybe<Order_By>;
  email_change_token_new?: InputMaybe<Order_By>;
  email_confirmed_at?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  invited_at?: InputMaybe<Order_By>;
  is_super_admin?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_change?: InputMaybe<Order_By>;
  phone_change_sent_at?: InputMaybe<Order_By>;
  phone_change_token?: InputMaybe<Order_By>;
  phone_confirmed_at?: InputMaybe<Order_By>;
  raw_app_meta_data?: InputMaybe<Order_By>;
  raw_user_meta_data?: InputMaybe<Order_By>;
  reauthentication_sent_at?: InputMaybe<Order_By>;
  reauthentication_token?: InputMaybe<Order_By>;
  recovery_sent_at?: InputMaybe<Order_By>;
  recovery_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Prepend_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  aud?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_change?: InputMaybe<Scalars['String']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  email_change_token_current?: InputMaybe<Scalars['String']>;
  email_change_token_new?: InputMaybe<Scalars['String']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  instance_id?: InputMaybe<Scalars['uuid']>;
  invited_at?: InputMaybe<Scalars['timestamptz']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_change?: InputMaybe<Scalars['String']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  phone_change_token?: InputMaybe<Scalars['String']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']>;
  reauthentication_token?: InputMaybe<Scalars['String']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']>;
  recovery_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['bigint'];
  /** An object relationship */
  playTimeByPlayTime: Play_Time;
  play_time: Scalars['bigint'];
  public_status: Scalars['bigint'];
  slug: Scalars['String'];
  thumbnail_url?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** An object relationship */
  upload_link?: Maybe<Upload_Links>;
  /** An array relationship */
  upload_links: Array<Upload_Links>;
  /** An aggregate relationship */
  upload_links_aggregate: Upload_Links_Aggregate;
  upload_links_id?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  user?: Maybe<Auth_Users>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "games" */
export type GamesUpload_LinksArgs = {
  distinct_on?: InputMaybe<Array<Upload_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upload_Links_Order_By>>;
  where?: InputMaybe<Upload_Links_Bool_Exp>;
};


/** columns and relationships of "games" */
export type GamesUpload_Links_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upload_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upload_Links_Order_By>>;
  where?: InputMaybe<Upload_Links_Bool_Exp>;
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  avg?: Maybe<Games_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};


/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "games" */
export type Games_Aggregate_Order_By = {
  avg?: InputMaybe<Games_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Games_Max_Order_By>;
  min?: InputMaybe<Games_Min_Order_By>;
  stddev?: InputMaybe<Games_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Games_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Games_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Games_Sum_Order_By>;
  var_pop?: InputMaybe<Games_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Games_Var_Samp_Order_By>;
  variance?: InputMaybe<Games_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "games" */
export type Games_Arr_Rel_Insert_Input = {
  data: Array<Games_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: 'games_avg_fields';
  id?: Maybe<Scalars['Float']>;
  play_time?: Maybe<Scalars['Float']>;
  public_status?: Maybe<Scalars['Float']>;
  upload_links_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "games" */
export type Games_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  playTimeByPlayTime?: InputMaybe<Play_Time_Bool_Exp>;
  play_time?: InputMaybe<Bigint_Comparison_Exp>;
  public_status?: InputMaybe<Bigint_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  upload_link?: InputMaybe<Upload_Links_Bool_Exp>;
  upload_links?: InputMaybe<Upload_Links_Bool_Exp>;
  upload_links_id?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<Auth_Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint */
  GamesGameIdKey = 'games_game_id_key',
  /** unique or primary key constraint */
  GamesPkey = 'games_pkey',
  /** unique or primary key constraint */
  GamesTitleKey = 'games_title_key'
}

/** input type for incrementing numeric columns in table "games" */
export type Games_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  play_time?: InputMaybe<Scalars['bigint']>;
  public_status?: InputMaybe<Scalars['bigint']>;
  upload_links_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  playTimeByPlayTime?: InputMaybe<Play_Time_Obj_Rel_Insert_Input>;
  play_time?: InputMaybe<Scalars['bigint']>;
  public_status?: InputMaybe<Scalars['bigint']>;
  slug?: InputMaybe<Scalars['String']>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  upload_link?: InputMaybe<Upload_Links_Obj_Rel_Insert_Input>;
  upload_links?: InputMaybe<Upload_Links_Arr_Rel_Insert_Input>;
  upload_links_id?: InputMaybe<Scalars['bigint']>;
  user?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  play_time?: Maybe<Scalars['bigint']>;
  public_status?: Maybe<Scalars['bigint']>;
  slug?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  upload_links_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "games" */
export type Games_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  play_time?: Maybe<Scalars['bigint']>;
  public_status?: Maybe<Scalars['bigint']>;
  slug?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  upload_links_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "games" */
export type Games_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** input type for inserting object relation for remote table "games" */
export type Games_Obj_Rel_Insert_Input = {
  data: Games_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** on_conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  playTimeByPlayTime?: InputMaybe<Play_Time_Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  upload_link?: InputMaybe<Upload_Links_Order_By>;
  upload_links_aggregate?: InputMaybe<Upload_Links_Aggregate_Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games */
export type Games_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PlayTime = 'play_time',
  /** column name */
  PublicStatus = 'public_status',
  /** column name */
  Slug = 'slug',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UploadLinksId = 'upload_links_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  play_time?: InputMaybe<Scalars['bigint']>;
  public_status?: InputMaybe<Scalars['bigint']>;
  slug?: InputMaybe<Scalars['String']>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  upload_links_id?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: 'games_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  play_time?: Maybe<Scalars['Float']>;
  public_status?: Maybe<Scalars['Float']>;
  upload_links_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "games" */
export type Games_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: 'games_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  play_time?: Maybe<Scalars['Float']>;
  public_status?: Maybe<Scalars['Float']>;
  upload_links_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "games" */
export type Games_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: 'games_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  play_time?: Maybe<Scalars['Float']>;
  public_status?: Maybe<Scalars['Float']>;
  upload_links_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "games" */
export type Games_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: 'games_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  play_time?: Maybe<Scalars['bigint']>;
  public_status?: Maybe<Scalars['bigint']>;
  upload_links_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "games" */
export type Games_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PlayTime = 'play_time',
  /** column name */
  PublicStatus = 'public_status',
  /** column name */
  Slug = 'slug',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UploadLinksId = 'upload_links_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: 'games_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  play_time?: Maybe<Scalars['Float']>;
  public_status?: Maybe<Scalars['Float']>;
  upload_links_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "games" */
export type Games_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: 'games_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  play_time?: Maybe<Scalars['Float']>;
  public_status?: Maybe<Scalars['Float']>;
  upload_links_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "games" */
export type Games_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: 'games_variance_fields';
  id?: Maybe<Scalars['Float']>;
  play_time?: Maybe<Scalars['Float']>;
  public_status?: Maybe<Scalars['Float']>;
  upload_links_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "games" */
export type Games_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  play_time?: InputMaybe<Order_By>;
  public_status?: InputMaybe<Order_By>;
  upload_links_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "play_time" */
  delete_play_time?: Maybe<Play_Time_Mutation_Response>;
  /** delete single row from the table: "play_time" */
  delete_play_time_by_pk?: Maybe<Play_Time>;
  /** delete data from the table: "storage.buckets" */
  delete_storage_buckets?: Maybe<Storage_Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  delete_storage_buckets_by_pk?: Maybe<Storage_Buckets>;
  /** delete data from the table: "storage.objects" */
  delete_storage_objects?: Maybe<Storage_Objects_Mutation_Response>;
  /** delete single row from the table: "storage.objects" */
  delete_storage_objects_by_pk?: Maybe<Storage_Objects>;
  /** delete data from the table: "upload_links" */
  delete_upload_links?: Maybe<Upload_Links_Mutation_Response>;
  /** delete single row from the table: "upload_links" */
  delete_upload_links_by_pk?: Maybe<Upload_Links>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "play_time" */
  insert_play_time?: Maybe<Play_Time_Mutation_Response>;
  /** insert a single row into the table: "play_time" */
  insert_play_time_one?: Maybe<Play_Time>;
  /** insert data into the table: "storage.buckets" */
  insert_storage_buckets?: Maybe<Storage_Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insert_storage_buckets_one?: Maybe<Storage_Buckets>;
  /** insert data into the table: "storage.objects" */
  insert_storage_objects?: Maybe<Storage_Objects_Mutation_Response>;
  /** insert a single row into the table: "storage.objects" */
  insert_storage_objects_one?: Maybe<Storage_Objects>;
  /** insert data into the table: "upload_links" */
  insert_upload_links?: Maybe<Upload_Links_Mutation_Response>;
  /** insert a single row into the table: "upload_links" */
  insert_upload_links_one?: Maybe<Upload_Links>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update data of the table: "play_time" */
  update_play_time?: Maybe<Play_Time_Mutation_Response>;
  /** update single row of the table: "play_time" */
  update_play_time_by_pk?: Maybe<Play_Time>;
  /** update data of the table: "storage.buckets" */
  update_storage_buckets?: Maybe<Storage_Buckets_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  update_storage_buckets_by_pk?: Maybe<Storage_Buckets>;
  /** update data of the table: "storage.objects" */
  update_storage_objects?: Maybe<Storage_Objects_Mutation_Response>;
  /** update single row of the table: "storage.objects" */
  update_storage_objects_by_pk?: Maybe<Storage_Objects>;
  /** update data of the table: "upload_links" */
  update_upload_links?: Maybe<Upload_Links_Mutation_Response>;
  /** update single row of the table: "upload_links" */
  update_upload_links_by_pk?: Maybe<Upload_Links>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Play_TimeArgs = {
  where: Play_Time_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Play_Time_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Storage_BucketsArgs = {
  where: Storage_Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Storage_Buckets_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Storage_ObjectsArgs = {
  where: Storage_Objects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Storage_Objects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Upload_LinksArgs = {
  where: Upload_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Upload_Links_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Play_TimeArgs = {
  objects: Array<Play_Time_Insert_Input>;
  on_conflict?: InputMaybe<Play_Time_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Play_Time_OneArgs = {
  object: Play_Time_Insert_Input;
  on_conflict?: InputMaybe<Play_Time_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Storage_BucketsArgs = {
  objects: Array<Storage_Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Storage_Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Storage_Buckets_OneArgs = {
  object: Storage_Buckets_Insert_Input;
  on_conflict?: InputMaybe<Storage_Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Storage_ObjectsArgs = {
  objects: Array<Storage_Objects_Insert_Input>;
  on_conflict?: InputMaybe<Storage_Objects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Storage_Objects_OneArgs = {
  object: Storage_Objects_Insert_Input;
  on_conflict?: InputMaybe<Storage_Objects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Upload_LinksArgs = {
  objects: Array<Upload_Links_Insert_Input>;
  on_conflict?: InputMaybe<Upload_Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Upload_Links_OneArgs = {
  object: Upload_Links_Insert_Input;
  on_conflict?: InputMaybe<Upload_Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Play_TimeArgs = {
  _inc?: InputMaybe<Play_Time_Inc_Input>;
  _set?: InputMaybe<Play_Time_Set_Input>;
  where: Play_Time_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Play_Time_By_PkArgs = {
  _inc?: InputMaybe<Play_Time_Inc_Input>;
  _set?: InputMaybe<Play_Time_Set_Input>;
  pk_columns: Play_Time_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Storage_BucketsArgs = {
  _set?: InputMaybe<Storage_Buckets_Set_Input>;
  where: Storage_Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Storage_Buckets_By_PkArgs = {
  _set?: InputMaybe<Storage_Buckets_Set_Input>;
  pk_columns: Storage_Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Storage_ObjectsArgs = {
  _append?: InputMaybe<Storage_Objects_Append_Input>;
  _delete_at_path?: InputMaybe<Storage_Objects_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Storage_Objects_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Storage_Objects_Delete_Key_Input>;
  _prepend?: InputMaybe<Storage_Objects_Prepend_Input>;
  _set?: InputMaybe<Storage_Objects_Set_Input>;
  where: Storage_Objects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Storage_Objects_By_PkArgs = {
  _append?: InputMaybe<Storage_Objects_Append_Input>;
  _delete_at_path?: InputMaybe<Storage_Objects_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Storage_Objects_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Storage_Objects_Delete_Key_Input>;
  _prepend?: InputMaybe<Storage_Objects_Prepend_Input>;
  _set?: InputMaybe<Storage_Objects_Set_Input>;
  pk_columns: Storage_Objects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Upload_LinksArgs = {
  _inc?: InputMaybe<Upload_Links_Inc_Input>;
  _set?: InputMaybe<Upload_Links_Set_Input>;
  where: Upload_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Upload_Links_By_PkArgs = {
  _inc?: InputMaybe<Upload_Links_Inc_Input>;
  _set?: InputMaybe<Upload_Links_Set_Input>;
  pk_columns: Upload_Links_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "play_time" */
export type Play_Time = {
  __typename?: 'play_time';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['bigint'];
  time: Scalars['String'];
};


/** columns and relationships of "play_time" */
export type Play_TimeGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "play_time" */
export type Play_TimeGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** aggregated selection of "play_time" */
export type Play_Time_Aggregate = {
  __typename?: 'play_time_aggregate';
  aggregate?: Maybe<Play_Time_Aggregate_Fields>;
  nodes: Array<Play_Time>;
};

/** aggregate fields of "play_time" */
export type Play_Time_Aggregate_Fields = {
  __typename?: 'play_time_aggregate_fields';
  avg?: Maybe<Play_Time_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Play_Time_Max_Fields>;
  min?: Maybe<Play_Time_Min_Fields>;
  stddev?: Maybe<Play_Time_Stddev_Fields>;
  stddev_pop?: Maybe<Play_Time_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Play_Time_Stddev_Samp_Fields>;
  sum?: Maybe<Play_Time_Sum_Fields>;
  var_pop?: Maybe<Play_Time_Var_Pop_Fields>;
  var_samp?: Maybe<Play_Time_Var_Samp_Fields>;
  variance?: Maybe<Play_Time_Variance_Fields>;
};


/** aggregate fields of "play_time" */
export type Play_Time_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Play_Time_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Play_Time_Avg_Fields = {
  __typename?: 'play_time_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "play_time". All fields are combined with a logical 'AND'. */
export type Play_Time_Bool_Exp = {
  _and?: InputMaybe<Array<Play_Time_Bool_Exp>>;
  _not?: InputMaybe<Play_Time_Bool_Exp>;
  _or?: InputMaybe<Array<Play_Time_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  time?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "play_time" */
export enum Play_Time_Constraint {
  /** unique or primary key constraint */
  PlayTimePkey = 'play_time_pkey',
  /** unique or primary key constraint */
  PlayTimeTimeKey = 'play_time_time_key'
}

/** input type for incrementing numeric columns in table "play_time" */
export type Play_Time_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "play_time" */
export type Play_Time_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Play_Time_Max_Fields = {
  __typename?: 'play_time_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Play_Time_Min_Fields = {
  __typename?: 'play_time_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "play_time" */
export type Play_Time_Mutation_Response = {
  __typename?: 'play_time_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Play_Time>;
};

/** input type for inserting object relation for remote table "play_time" */
export type Play_Time_Obj_Rel_Insert_Input = {
  data: Play_Time_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Play_Time_On_Conflict>;
};

/** on_conflict condition type for table "play_time" */
export type Play_Time_On_Conflict = {
  constraint: Play_Time_Constraint;
  update_columns?: Array<Play_Time_Update_Column>;
  where?: InputMaybe<Play_Time_Bool_Exp>;
};

/** Ordering options when selecting data from "play_time". */
export type Play_Time_Order_By = {
  created_at?: InputMaybe<Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: play_time */
export type Play_Time_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "play_time" */
export enum Play_Time_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "play_time" */
export type Play_Time_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Play_Time_Stddev_Fields = {
  __typename?: 'play_time_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Play_Time_Stddev_Pop_Fields = {
  __typename?: 'play_time_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Play_Time_Stddev_Samp_Fields = {
  __typename?: 'play_time_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Play_Time_Sum_Fields = {
  __typename?: 'play_time_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "play_time" */
export enum Play_Time_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Time = 'time'
}

/** aggregate var_pop on columns */
export type Play_Time_Var_Pop_Fields = {
  __typename?: 'play_time_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Play_Time_Var_Samp_Fields = {
  __typename?: 'play_time_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Play_Time_Variance_Fields = {
  __typename?: 'play_time_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "play_time" */
  play_time: Array<Play_Time>;
  /** fetch aggregated fields from the table: "play_time" */
  play_time_aggregate: Play_Time_Aggregate;
  /** fetch data from the table: "play_time" using primary key columns */
  play_time_by_pk?: Maybe<Play_Time>;
  /** fetch data from the table: "storage.buckets" */
  storage_buckets: Array<Storage_Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  storage_buckets_aggregate: Storage_Buckets_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  storage_buckets_by_pk?: Maybe<Storage_Buckets>;
  /** fetch data from the table: "storage.objects" */
  storage_objects: Array<Storage_Objects>;
  /** fetch aggregated fields from the table: "storage.objects" */
  storage_objects_aggregate: Storage_Objects_Aggregate;
  /** fetch data from the table: "storage.objects" using primary key columns */
  storage_objects_by_pk?: Maybe<Storage_Objects>;
  /** An array relationship */
  upload_links: Array<Upload_Links>;
  /** An aggregate relationship */
  upload_links_aggregate: Upload_Links_Aggregate;
  /** fetch data from the table: "upload_links" using primary key columns */
  upload_links_by_pk?: Maybe<Upload_Links>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPlay_TimeArgs = {
  distinct_on?: InputMaybe<Array<Play_Time_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Play_Time_Order_By>>;
  where?: InputMaybe<Play_Time_Bool_Exp>;
};


export type Query_RootPlay_Time_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Play_Time_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Play_Time_Order_By>>;
  where?: InputMaybe<Play_Time_Bool_Exp>;
};


export type Query_RootPlay_Time_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootStorage_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Storage_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Buckets_Order_By>>;
  where?: InputMaybe<Storage_Buckets_Bool_Exp>;
};


export type Query_RootStorage_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storage_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Buckets_Order_By>>;
  where?: InputMaybe<Storage_Buckets_Bool_Exp>;
};


export type Query_RootStorage_Buckets_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStorage_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Storage_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Objects_Order_By>>;
  where?: InputMaybe<Storage_Objects_Bool_Exp>;
};


export type Query_RootStorage_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storage_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Objects_Order_By>>;
  where?: InputMaybe<Storage_Objects_Bool_Exp>;
};


export type Query_RootStorage_Objects_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUpload_LinksArgs = {
  distinct_on?: InputMaybe<Array<Upload_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upload_Links_Order_By>>;
  where?: InputMaybe<Upload_Links_Bool_Exp>;
};


export type Query_RootUpload_Links_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upload_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upload_Links_Order_By>>;
  where?: InputMaybe<Upload_Links_Bool_Exp>;
};


export type Query_RootUpload_Links_By_PkArgs = {
  id: Scalars['bigint'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Storage_Buckets = {
  __typename?: 'storage_buckets';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<Scalars['uuid']>;
  public?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "storage.buckets" */
export type Storage_Buckets_Aggregate = {
  __typename?: 'storage_buckets_aggregate';
  aggregate?: Maybe<Storage_Buckets_Aggregate_Fields>;
  nodes: Array<Storage_Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Storage_Buckets_Aggregate_Fields = {
  __typename?: 'storage_buckets_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Storage_Buckets_Max_Fields>;
  min?: Maybe<Storage_Buckets_Min_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Storage_Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Storage_Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Storage_Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Storage_Buckets_Bool_Exp>>;
  _not?: InputMaybe<Storage_Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Storage_Buckets_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Uuid_Comparison_Exp>;
  public?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Storage_Buckets_Constraint {
  /** unique or primary key constraint */
  Bname = 'bname',
  /** unique or primary key constraint */
  BucketsPkey = 'buckets_pkey'
}

/** input type for inserting data into table "storage.buckets" */
export type Storage_Buckets_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['uuid']>;
  public?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Storage_Buckets_Max_Fields = {
  __typename?: 'storage_buckets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Storage_Buckets_Min_Fields = {
  __typename?: 'storage_buckets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Storage_Buckets_Mutation_Response = {
  __typename?: 'storage_buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Storage_Buckets>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Storage_Buckets_On_Conflict = {
  constraint: Storage_Buckets_Constraint;
  update_columns?: Array<Storage_Buckets_Update_Column>;
  where?: InputMaybe<Storage_Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Storage_Buckets_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  public?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage_buckets */
export type Storage_Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Storage_Buckets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Public = 'public',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "storage.buckets" */
export type Storage_Buckets_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['uuid']>;
  public?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "storage.buckets" */
export enum Storage_Buckets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Public = 'public',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "storage.objects" */
export type Storage_Objects = {
  __typename?: 'storage_objects';
  bucket_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  last_accessed_at?: Maybe<Scalars['timestamptz']>;
  metadata?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  path_tokens?: Maybe<Scalars['_text']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "storage.objects" */
export type Storage_ObjectsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "storage.objects" */
export type Storage_Objects_Aggregate = {
  __typename?: 'storage_objects_aggregate';
  aggregate?: Maybe<Storage_Objects_Aggregate_Fields>;
  nodes: Array<Storage_Objects>;
};

/** aggregate fields of "storage.objects" */
export type Storage_Objects_Aggregate_Fields = {
  __typename?: 'storage_objects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Storage_Objects_Max_Fields>;
  min?: Maybe<Storage_Objects_Min_Fields>;
};


/** aggregate fields of "storage.objects" */
export type Storage_Objects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Storage_Objects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Storage_Objects_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "storage.objects". All fields are combined with a logical 'AND'. */
export type Storage_Objects_Bool_Exp = {
  _and?: InputMaybe<Array<Storage_Objects_Bool_Exp>>;
  _not?: InputMaybe<Storage_Objects_Bool_Exp>;
  _or?: InputMaybe<Array<Storage_Objects_Bool_Exp>>;
  bucket_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_accessed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Uuid_Comparison_Exp>;
  path_tokens?: InputMaybe<_Text_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.objects" */
export enum Storage_Objects_Constraint {
  /** unique or primary key constraint */
  BucketidObjname = 'bucketid_objname',
  /** unique or primary key constraint */
  ObjectsPkey = 'objects_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Storage_Objects_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Storage_Objects_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Storage_Objects_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "storage.objects" */
export type Storage_Objects_Insert_Input = {
  bucket_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_accessed_at?: InputMaybe<Scalars['timestamptz']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Storage_Objects_Max_Fields = {
  __typename?: 'storage_objects_max_fields';
  bucket_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_accessed_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Storage_Objects_Min_Fields = {
  __typename?: 'storage_objects_min_fields';
  bucket_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_accessed_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.objects" */
export type Storage_Objects_Mutation_Response = {
  __typename?: 'storage_objects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Storage_Objects>;
};

/** on_conflict condition type for table "storage.objects" */
export type Storage_Objects_On_Conflict = {
  constraint: Storage_Objects_Constraint;
  update_columns?: Array<Storage_Objects_Update_Column>;
  where?: InputMaybe<Storage_Objects_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.objects". */
export type Storage_Objects_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_accessed_at?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  path_tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage_objects */
export type Storage_Objects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Storage_Objects_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "storage.objects" */
export enum Storage_Objects_Select_Column {
  /** column name */
  BucketId = 'bucket_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastAccessedAt = 'last_accessed_at',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  PathTokens = 'path_tokens',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "storage.objects" */
export type Storage_Objects_Set_Input = {
  bucket_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_accessed_at?: InputMaybe<Scalars['timestamptz']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "storage.objects" */
export enum Storage_Objects_Update_Column {
  /** column name */
  BucketId = 'bucket_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastAccessedAt = 'last_accessed_at',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "play_time" */
  play_time: Array<Play_Time>;
  /** fetch aggregated fields from the table: "play_time" */
  play_time_aggregate: Play_Time_Aggregate;
  /** fetch data from the table: "play_time" using primary key columns */
  play_time_by_pk?: Maybe<Play_Time>;
  /** fetch data from the table: "storage.buckets" */
  storage_buckets: Array<Storage_Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  storage_buckets_aggregate: Storage_Buckets_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  storage_buckets_by_pk?: Maybe<Storage_Buckets>;
  /** fetch data from the table: "storage.objects" */
  storage_objects: Array<Storage_Objects>;
  /** fetch aggregated fields from the table: "storage.objects" */
  storage_objects_aggregate: Storage_Objects_Aggregate;
  /** fetch data from the table: "storage.objects" using primary key columns */
  storage_objects_by_pk?: Maybe<Storage_Objects>;
  /** An array relationship */
  upload_links: Array<Upload_Links>;
  /** An aggregate relationship */
  upload_links_aggregate: Upload_Links_Aggregate;
  /** fetch data from the table: "upload_links" using primary key columns */
  upload_links_by_pk?: Maybe<Upload_Links>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootPlay_TimeArgs = {
  distinct_on?: InputMaybe<Array<Play_Time_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Play_Time_Order_By>>;
  where?: InputMaybe<Play_Time_Bool_Exp>;
};


export type Subscription_RootPlay_Time_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Play_Time_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Play_Time_Order_By>>;
  where?: InputMaybe<Play_Time_Bool_Exp>;
};


export type Subscription_RootPlay_Time_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootStorage_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Storage_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Buckets_Order_By>>;
  where?: InputMaybe<Storage_Buckets_Bool_Exp>;
};


export type Subscription_RootStorage_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storage_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Buckets_Order_By>>;
  where?: InputMaybe<Storage_Buckets_Bool_Exp>;
};


export type Subscription_RootStorage_Buckets_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStorage_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Storage_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Objects_Order_By>>;
  where?: InputMaybe<Storage_Objects_Bool_Exp>;
};


export type Subscription_RootStorage_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storage_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storage_Objects_Order_By>>;
  where?: InputMaybe<Storage_Objects_Bool_Exp>;
};


export type Subscription_RootStorage_Objects_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUpload_LinksArgs = {
  distinct_on?: InputMaybe<Array<Upload_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upload_Links_Order_By>>;
  where?: InputMaybe<Upload_Links_Bool_Exp>;
};


export type Subscription_RootUpload_Links_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upload_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upload_Links_Order_By>>;
  where?: InputMaybe<Upload_Links_Bool_Exp>;
};


export type Subscription_RootUpload_Links_By_PkArgs = {
  id: Scalars['bigint'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "upload_links" */
export type Upload_Links = {
  __typename?: 'upload_links';
  code_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_url: Scalars['String'];
  framework_url: Scalars['String'];
  /** An object relationship */
  game?: Maybe<Games>;
  game_id?: Maybe<Scalars['bigint']>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['bigint'];
  loader_url: Scalars['String'];
};


/** columns and relationships of "upload_links" */
export type Upload_LinksGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "upload_links" */
export type Upload_LinksGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** aggregated selection of "upload_links" */
export type Upload_Links_Aggregate = {
  __typename?: 'upload_links_aggregate';
  aggregate?: Maybe<Upload_Links_Aggregate_Fields>;
  nodes: Array<Upload_Links>;
};

/** aggregate fields of "upload_links" */
export type Upload_Links_Aggregate_Fields = {
  __typename?: 'upload_links_aggregate_fields';
  avg?: Maybe<Upload_Links_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Upload_Links_Max_Fields>;
  min?: Maybe<Upload_Links_Min_Fields>;
  stddev?: Maybe<Upload_Links_Stddev_Fields>;
  stddev_pop?: Maybe<Upload_Links_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Upload_Links_Stddev_Samp_Fields>;
  sum?: Maybe<Upload_Links_Sum_Fields>;
  var_pop?: Maybe<Upload_Links_Var_Pop_Fields>;
  var_samp?: Maybe<Upload_Links_Var_Samp_Fields>;
  variance?: Maybe<Upload_Links_Variance_Fields>;
};


/** aggregate fields of "upload_links" */
export type Upload_Links_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Upload_Links_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "upload_links" */
export type Upload_Links_Aggregate_Order_By = {
  avg?: InputMaybe<Upload_Links_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Upload_Links_Max_Order_By>;
  min?: InputMaybe<Upload_Links_Min_Order_By>;
  stddev?: InputMaybe<Upload_Links_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Upload_Links_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Upload_Links_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Upload_Links_Sum_Order_By>;
  var_pop?: InputMaybe<Upload_Links_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Upload_Links_Var_Samp_Order_By>;
  variance?: InputMaybe<Upload_Links_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "upload_links" */
export type Upload_Links_Arr_Rel_Insert_Input = {
  data: Array<Upload_Links_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Upload_Links_On_Conflict>;
};

/** aggregate avg on columns */
export type Upload_Links_Avg_Fields = {
  __typename?: 'upload_links_avg_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "upload_links" */
export type Upload_Links_Avg_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "upload_links". All fields are combined with a logical 'AND'. */
export type Upload_Links_Bool_Exp = {
  _and?: InputMaybe<Array<Upload_Links_Bool_Exp>>;
  _not?: InputMaybe<Upload_Links_Bool_Exp>;
  _or?: InputMaybe<Array<Upload_Links_Bool_Exp>>;
  code_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data_url?: InputMaybe<String_Comparison_Exp>;
  framework_url?: InputMaybe<String_Comparison_Exp>;
  game?: InputMaybe<Games_Bool_Exp>;
  game_id?: InputMaybe<Bigint_Comparison_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  loader_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "upload_links" */
export enum Upload_Links_Constraint {
  /** unique or primary key constraint */
  UploadLinksPkey = 'upload_links_pkey'
}

/** input type for incrementing numeric columns in table "upload_links" */
export type Upload_Links_Inc_Input = {
  game_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "upload_links" */
export type Upload_Links_Insert_Input = {
  code_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data_url?: InputMaybe<Scalars['String']>;
  framework_url?: InputMaybe<Scalars['String']>;
  game?: InputMaybe<Games_Obj_Rel_Insert_Input>;
  game_id?: InputMaybe<Scalars['bigint']>;
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  loader_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Upload_Links_Max_Fields = {
  __typename?: 'upload_links_max_fields';
  code_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_url?: Maybe<Scalars['String']>;
  framework_url?: Maybe<Scalars['String']>;
  game_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  loader_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "upload_links" */
export type Upload_Links_Max_Order_By = {
  code_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data_url?: InputMaybe<Order_By>;
  framework_url?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loader_url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Upload_Links_Min_Fields = {
  __typename?: 'upload_links_min_fields';
  code_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_url?: Maybe<Scalars['String']>;
  framework_url?: Maybe<Scalars['String']>;
  game_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  loader_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "upload_links" */
export type Upload_Links_Min_Order_By = {
  code_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data_url?: InputMaybe<Order_By>;
  framework_url?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loader_url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "upload_links" */
export type Upload_Links_Mutation_Response = {
  __typename?: 'upload_links_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Upload_Links>;
};

/** input type for inserting object relation for remote table "upload_links" */
export type Upload_Links_Obj_Rel_Insert_Input = {
  data: Upload_Links_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Upload_Links_On_Conflict>;
};

/** on_conflict condition type for table "upload_links" */
export type Upload_Links_On_Conflict = {
  constraint: Upload_Links_Constraint;
  update_columns?: Array<Upload_Links_Update_Column>;
  where?: InputMaybe<Upload_Links_Bool_Exp>;
};

/** Ordering options when selecting data from "upload_links". */
export type Upload_Links_Order_By = {
  code_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data_url?: InputMaybe<Order_By>;
  framework_url?: InputMaybe<Order_By>;
  game?: InputMaybe<Games_Order_By>;
  game_id?: InputMaybe<Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  loader_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: upload_links */
export type Upload_Links_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "upload_links" */
export enum Upload_Links_Select_Column {
  /** column name */
  CodeUrl = 'code_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataUrl = 'data_url',
  /** column name */
  FrameworkUrl = 'framework_url',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  LoaderUrl = 'loader_url'
}

/** input type for updating data in table "upload_links" */
export type Upload_Links_Set_Input = {
  code_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data_url?: InputMaybe<Scalars['String']>;
  framework_url?: InputMaybe<Scalars['String']>;
  game_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  loader_url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Upload_Links_Stddev_Fields = {
  __typename?: 'upload_links_stddev_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "upload_links" */
export type Upload_Links_Stddev_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Upload_Links_Stddev_Pop_Fields = {
  __typename?: 'upload_links_stddev_pop_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "upload_links" */
export type Upload_Links_Stddev_Pop_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Upload_Links_Stddev_Samp_Fields = {
  __typename?: 'upload_links_stddev_samp_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "upload_links" */
export type Upload_Links_Stddev_Samp_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Upload_Links_Sum_Fields = {
  __typename?: 'upload_links_sum_fields';
  game_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "upload_links" */
export type Upload_Links_Sum_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "upload_links" */
export enum Upload_Links_Update_Column {
  /** column name */
  CodeUrl = 'code_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataUrl = 'data_url',
  /** column name */
  FrameworkUrl = 'framework_url',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  LoaderUrl = 'loader_url'
}

/** aggregate var_pop on columns */
export type Upload_Links_Var_Pop_Fields = {
  __typename?: 'upload_links_var_pop_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "upload_links" */
export type Upload_Links_Var_Pop_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Upload_Links_Var_Samp_Fields = {
  __typename?: 'upload_links_var_samp_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "upload_links" */
export type Upload_Links_Var_Samp_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Upload_Links_Variance_Fields = {
  __typename?: 'upload_links_variance_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "upload_links" */
export type Upload_Links_Variance_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAllGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGamesQuery = { __typename?: 'query_root', games: Array<{ __typename?: 'games', id: any, play_time: any, slug: string, thumbnail_url?: string | null, title: string }> };


export const GetAllGamesDocument = gql`
    query GetAllGames {
  games {
    id
    play_time
    slug
    thumbnail_url
    title
  }
}
    `;

/**
 * __useGetAllGamesQuery__
 *
 * To run a query within a React component, call `useGetAllGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGamesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllGamesQuery, GetAllGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllGamesQuery, GetAllGamesQueryVariables>(GetAllGamesDocument, options);
      }
export function useGetAllGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGamesQuery, GetAllGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllGamesQuery, GetAllGamesQueryVariables>(GetAllGamesDocument, options);
        }
export type GetAllGamesQueryHookResult = ReturnType<typeof useGetAllGamesQuery>;
export type GetAllGamesLazyQueryHookResult = ReturnType<typeof useGetAllGamesLazyQuery>;
export type GetAllGamesQueryResult = Apollo.QueryResult<GetAllGamesQuery, GetAllGamesQueryVariables>;