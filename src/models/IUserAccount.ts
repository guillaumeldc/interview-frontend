export interface IUserAccount {
  account_id: string,
  license: {
    license_id: string,
    license_type: {
      label: string,
      is_demo: boolean,
      max_accounts: number,
      max_qoe_jobs: number,
      max_qos_jobs: number,
      max_custom_jobs: number,
      active_catalog_limit: number,
      total_active_items_limit: number,
      active_items_per_catalog_limit: number,
      passive_catalog_limit: number,
      total_passive_items_limit: number,
      passive_items_per_catalog_limit: number
    },
    created_at: string,
    expiry_date: string,
    is_active: boolean,
    is_expired: boolean,
    vodsmart_stats: {
      total_catalog: number,
      active_catalog_count: number,
      passive_catalog_count: number,
      total_items: number,
      total_active_items: number,
      total_passive_items: number
    },
    module_accesses: string[],
  },
  license_type: string,
  authority: string[],
  alert_list: [],
  settings: {
    nav_theme: string,
    weak_mode: boolean
  }
}