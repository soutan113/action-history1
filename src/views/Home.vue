<template>
  <div>
    <v-card>
      <v-card-title>
        <!-- 月選択 -->
        <v-col cols="8">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="yearMonth"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="yearMonth"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
                hide-details
              />
            </template>
            <v-date-picker
              v-model="yearMonth"
              type="month"
              color="green"
              locale="ja-jp"
              no-title
              scrollable
            >
              <v-spacer/>
              <v-btn text color="grey" @click="menu = false">キャンセル</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(yearMonth)">選択</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer/>
        <!-- 追加ボタン -->
        <v-col class="text-right" cols="4">
          <v-btn dark color="green">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <!-- テーブル -->
      <v-data-table
        class="text-no-wrap"
        :headers="tableHeaders"
        :items="tableData"
        :search="search"
        :footer-props="footerProps"
        :loading="loading"
        :sort-by="'date'"
        :sort-desc="true"
        :items-per-page="30"
        mobile-breakpoint="0"
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    const today = new Date()
    const year = today.getFullYear()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)

    return {
      /** ローディング状態 */
      loading: false,
      /** 月選択メニューの状態 */
      menu: false,
      /** 検索文字 */
      search: '',
      /** 選択年月 */
      yearMonth: `${year}-${month}`,
      /** テーブルに表示させるデータ */
      tableData: [
        /** サンプルデータ */
        { date: '2020-09-01', temperature:38.6, memo: 'メモ' },
        { date: '2020-09-02', temperature:38.2, memo: 'メモ2' }
      ]
    }
  },

  computed: {
    /** テーブルのヘッダー設定 */
    tableHeaders () {
      return [
        { text: '日付', value: 'date', align: 'end' },
        { text: '体温', value: 'temperature', sortable: false },
        { text: 'メモ', value: 'memo', sortable: false }
      ]
    },

    /** テーブルのフッター設定 */
    footerProps () {
      return { itemsPerPageText: '', itemsPerPageOptions: [] }
    }
  }
}
</script>
