import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLeads = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Leads, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly f_name?: string | null;
  readonly L_name?: string | null;
  readonly Make?: string | null;
  readonly Model?: string | null;
  readonly reg_Number?: number | null;
  readonly Sa_price?: number | null;
  readonly deposit?: number | null;
  readonly ba_finance?: number | null;
  readonly t_amount?: number | null;
  readonly Blaoo_payment?: number | null;
  readonly m_payment?: number | null;
  readonly rate?: number | null;
  readonly sta_date?: string | null;
  readonly m_of_payment?: number | null;
  readonly figure?: number | null;
  readonly ageement?: number | null;
  readonly bebate?: number | null;
  readonly valueation?: number | null;
  readonly equity?: number | null;
  readonly Milege_start?: number | null;
  readonly Milege_now?: number | null;
  readonly phone?: string | null;
  readonly email: string;
  readonly p_code?: string | null;
  readonly type?: string | null;
  readonly status?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLeads = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Leads, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly f_name?: string | null;
  readonly L_name?: string | null;
  readonly Make?: string | null;
  readonly Model?: string | null;
  readonly reg_Number?: number | null;
  readonly Sa_price?: number | null;
  readonly deposit?: number | null;
  readonly ba_finance?: number | null;
  readonly t_amount?: number | null;
  readonly Blaoo_payment?: number | null;
  readonly m_payment?: number | null;
  readonly rate?: number | null;
  readonly sta_date?: string | null;
  readonly m_of_payment?: number | null;
  readonly figure?: number | null;
  readonly ageement?: number | null;
  readonly bebate?: number | null;
  readonly valueation?: number | null;
  readonly equity?: number | null;
  readonly Milege_start?: number | null;
  readonly Milege_now?: number | null;
  readonly phone?: string | null;
  readonly email: string;
  readonly p_code?: string | null;
  readonly type?: string | null;
  readonly status?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Leads = LazyLoading extends LazyLoadingDisabled ? EagerLeads : LazyLeads

export declare const Leads: (new (init: ModelInit<Leads>) => Leads) & {
  copyOf(source: Leads, mutator: (draft: MutableModel<Leads>) => MutableModel<Leads> | void): Leads;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email: string;
  readonly user_role?: string | null;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email: string;
  readonly user_role?: string | null;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}