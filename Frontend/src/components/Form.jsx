import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Form = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [countries, setCountries] = useState(null);
  const [years, setYears] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);

  // refs

  const resultTableRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sample data

  const apiData = {
    code: 200,
    status: true,
    msg: "",
    time: "2024-03-30 11:06:48",
    param_obj: {
      year: 2560,
      keyword: "",
      dept_code: "",
      winner_tin: "",
      budget_start: 0,
      budget_end: "",
      offset: 0,
      limit: 20,
    },
    result: [
      {
        project_id: "59126216244",
        project_name: "จ้างสร้างเรือดำน้ำ (25.11.17.01 ) โดยวิธีกรณีพิเศษ",
        project_type_name: "จ้างทำของ/จ้างเหมาบริการ",
        dept_name: "กองทัพเรือ",
        dept_sub_name:
          "กองทัพเรือ (สยป.ทร/งานโครงการจัดหายุทโธปกรณ์หลักของ ทร.)",
        purchase_method_name: "กรณีพิเศษ",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "-",
        project_money: "13,500,000,000.00",
        price_build: "13,500,000,000.00",
        sum_price_agree: "13,481,863,800.00",
        budget_year: 2560,
        transaction_date: "5 พ.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "บางกอกใหญ่",
        subdistrict: "วัดอรุณ",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 0,
          lon: 0,
        },
        geom: "",
        contract: [
          {
            winner_tin: "DUMMY00003765",
            winner:
              "China Shipbuilding & Offshore International Co., Ltd. (CSOC)",
            contract_no: "SEA-6066-02",
            contract_date: "5 พ.ค. 60",
            contract_finish_date: "30 ก.ย. 66",
            price_agree: "13,481,863,800",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "60016013525",
        project_name:
          "ประกวดราคาจ้างสร้างอาคารโครงการปรับวางที่ตั้งโรงเรียนนายเรืออากาศฯ พร้อมระบบสาธารณูปโภคและสิ่งอำนวยความสะดวก ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กองทัพอากาศ",
        dept_sub_name: "กรมช่างโยธาทหารอากาศ กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "20 ม.ค. 60",
        project_money: "2,783,087,000.00",
        price_build: "2,783,087,000.00",
        sum_price_agree: "2,690,000,000.00",
        budget_year: 2560,
        transaction_date: "17 ก.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ดอนเมือง",
        subdistrict: "ดอนเมือง",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 14.56331457992772,
          lon: 101.16451263427734,
        },
        geom: "POINT(101.16451263427734 14.56331457992772)",
        contract: [
          {
            winner_tin: "0103508002704",
            winner: "ห้างหุ้นส่วนจำกัด สามประสิทธิ์",
            contract_no: "สจ.270/2560",
            contract_date: "17 ก.ค. 60",
            contract_finish_date: "12 พ.ย. 63",
            price_agree: "2,690,000,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59045046820",
        project_name:
          "เช่าระบบคอมพิวเตอร์ซอฟต์แวร์สำเร็จรูปสำหรับธุรกิจหลัก ระยะที่ 1 โดยวิธีพิเศษ",
        project_type_name: "เช่า",
        dept_name: "การไฟฟ้าส่วนภูมิภาค",
        dept_sub_name: "การไฟฟ้าส่วนภูมิภาค (กฟภ.) กรุงเทพฯ",
        purchase_method_name: "พิเศษ",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "-",
        project_money: "2,966,724,800.00",
        price_build: "2,752,413,430.00",
        sum_price_agree: "2,639,005,200.00",
        budget_year: 2560,
        transaction_date: "11 พ.ย. 59",
        province: "กรุงเทพมหานคร",
        district: "จตุจักร",
        subdistrict: "ลาดยาว",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 0,
          lon: 0,
        },
        geom: "",
        contract: [
          {
            winner_tin: "0105543008219",
            winner: "บริษัท พอร์ทัลเน็ท  จำกัด",
            contract_no: "บ.45/2559",
            contract_date: "11 พ.ย. 59",
            contract_finish_date: "11 พ.ย. 62",
            price_agree: "2,639,005,200",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "60045009031",
        project_name:
          "ประกวดราคาจ้างงานก่อสร้างอาคารศูนย์บริหารทางพิเศษ กทพ. ด้วยวิธีการทางอิเล็กทรอนิกส์",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "การทางพิเศษแห่งประเทศไทย",
        dept_sub_name: "การทางพิเศษแห่งประเทศไทย (กทพ.) กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาด้วยวิธีการทางอิเล็กทรอนิกส์",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "4 พ.ค. 60",
        project_money: "2,985,686,317.69",
        price_build: "2,985,686,317.69",
        sum_price_agree: "2,543,000,000.00",
        budget_year: 2560,
        transaction_date: "20 ก.ย. 60",
        province: "กรุงเทพมหานคร",
        district: "พระนคร",
        subdistrict: "พระบรมมหาราชวัง",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 0,
          lon: 0,
        },
        geom: "",
        contract: [
          {
            winner_tin: "0105527001370",
            winner: "บริษัท ฑีฆาก่อสร้าง จำกัด",
            contract_no: "6000002787",
            contract_date: "20 ก.ย. 60",
            contract_finish_date: "20 เม.ย. 63",
            price_agree: "2,543,000,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "58065138000",
        project_name:
          "ประกวดราคาจ้างSupply and Construction of 500/230/115 kV Bang Pakong Substation (GIS) (Bid No. TIPE-S-02 and RTS2-S-02)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย",
        dept_sub_name: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.) นนทบุรี",
        purchase_method_name: "ประกวดราคา",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "15 มิ.ย. 58",
        project_money: "3,670,000,000.00",
        price_build: "3,834,000,000.00",
        sum_price_agree: "2,335,644,501.63",
        budget_year: 2560,
        transaction_date: "27 ม.ค. 60",
        province: "นนทบุรี",
        district: "บางกรวย",
        subdistrict: "บางกรวย",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 0,
          lon: 0,
        },
        geom: "",
        contract: [
          {
            winner_tin: "0125533000703",
            winner: "บริษัท พรีไซซ ซิสเท็ม แอนด์ โปรเจ็ค จำกัด",
            contract_no: "W100482-225M-TIPE-S-02 and RTS2-S-02",
            contract_date: "2 มี.ค. 60",
            contract_finish_date: "17 ก.พ. 62",
            price_agree: "2,335,644,502",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "60076079396",
        project_name:
          "ซื้อครุภัณฑ์โครงการเพิ่มประสิทธิภาพการตรวจพิสูจน์บุคคลโดยเทคโนโลยี Biometrics (ลายพิมพ์นิ้วมือและภาพถ่ายใบหน้า) ระยะที่ 1 โดยวิธีพิเศษ",
        project_type_name: "ซื้อ",
        dept_name: "สำนักงานตำรวจแห่งชาติ",
        dept_sub_name: "กองพลาธิการ สนง.ส่งกำลังบำรุง",
        purchase_method_name: "พิเศษ",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "-",
        project_money: "2,126,073,600.00",
        price_build: "2,126,073,600.00",
        sum_price_agree: "2,116,000,000.00",
        budget_year: 2560,
        transaction_date: "11 ก.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ดุสิต",
        subdistrict: "ถนนนครไชยศรี",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 0,
          lon: 0,
        },
        geom: "",
        contract: [
          {
            winner_tin: "0105546101643",
            winner: "บริษัท เอ็มเอสซี สิทธิผล จำกัด",
            contract_no: "พธ. 37/2560",
            contract_date: "11 ก.ค. 60",
            contract_finish_date: "2 พ.ค. 62",
            price_agree: "2,116,000,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096215317",
        project_name:
          "ประกวดราคาจ้างโครงการก่อสร้างทางหลวงพิเศษระหว่างเมือง สายบางปะอิน - สระบุรี - นครราชสีมา ช่วง กม.188+800.000 - กม.195+943.000 (รวมทางแยกต่างระดับนครราชสีมา) โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 2 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "27 ก.ย. 59",
        project_money: "2,000,000,000.00",
        price_build: "1,999,985,104.44",
        sum_price_agree: "1,994,000,000.00",
        budget_year: 2560,
        transaction_date: "15 มี.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 15.008965423010398,
          lon: 102.07028473646001,
        },
        geom: "LINESTRING(102.0815380933936 15.02421947663275,102.05903137952642 14.99371136938805)",
        contract: [
          {
            winner_tin: "0315555000305",
            winner: "บริษัท ยิ่งเจริญก่อสร้างบุรีรัมย์ จำกัด",
            contract_no: "สท.2/21/2560",
            contract_date: "15 มี.ค. 60",
            contract_finish_date: "31 ต.ค. 62",
            price_agree: "1,994,000,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096233814",
        project_name:
          "ประกวดราคาจ้างโครงการก่อสร้างทางหลวงพิเศษระหว่างเมือง  สายบางปะอิน - สระบุรี - นครราชสีมา ช่วง กม. 0 + 000.000 - กม. 4 + 525.000 และ กม. 5 + 100.000 - กม. 9 + 008.350 โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 2 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "27 ก.ย. 59",
        project_money: "2,000,000,000.00",
        price_build: "1,987,676,074.87",
        sum_price_agree: "1,981,700,000.00",
        budget_year: 2560,
        transaction_date: "15 มี.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 14.2121227884713,
          lon: 100.61092888791701,
        },
        geom: "POINT(100.61092888791701 14.2121227884713)",
        contract: [
          {
            winner_tin: "0107537002575",
            winner: "บริษัท ช.การช่าง จำกัด (มหาชน)",
            contract_no: "สท.2/15/2560",
            contract_date: "15 มี.ค. 60",
            contract_finish_date: "28 ก.พ. 63",
            price_agree: "1,981,700,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59116272226",
        project_name:
          "ประกวดราคาจ้างงานจ้างเหมาโครงการก่อสร้างทางหลวงพิเศษระหว่างเมือง สาย บางปะอิน - สระบุรี - นครราชสีมา ช่วง กม. 0+000.000 ถึง กม. 5+470.673 (EAST SPUR LINE) (รวมทางแยกต่างระดับบางปะอิน 1) ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "7 ธ.ค. 59",
        project_money: "2,000,000,000.00",
        price_build: "1,943,492,188.17",
        sum_price_agree: "1,938,840,000.00",
        budget_year: 2560,
        transaction_date: "12 เม.ย. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 14.19174357963247,
          lon: 100.64071744680403,
        },
        geom: "POINT(100.64071744680403 14.19174357963247)",
        contract: [
          {
            winner_tin: "0107536001001",
            winner:
              "บริษัท ซิโน-ไทย เอ็นจีเนียริ่ง แอนด์ คอนสตรัคชั่น จำกัด (มหาชน)",
            contract_no: "สส.20/2560",
            contract_date: "12 เม.ย. 60",
            contract_finish_date: "27 มี.ค. 63",
            price_agree: "1,938,840,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096225619",
        project_name:
          "ประกวดราคาจ้างโครงการก่อสร้างทางหลวงพิเศษระหว่างเมือง  สายบางปะอิน - สระบุรี - นครราชสีมา ช่วง กม. 9 + 008.350 - กม. 15 + 000.000 (รวมทางแยกต่างระดับวังน้อย) โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 2 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "26 ก.ย. 59",
        project_money: "2,000,000,000.00",
        price_build: "1,932,436,048.36",
        sum_price_agree: "1,926,299,000.00",
        budget_year: 2560,
        transaction_date: "15 มี.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 14.2742981258389,
          lon: 100.70886943984101,
        },
        geom: "POINT(100.70886943984101 14.2742981258389)",
        contract: [
          {
            winner_tin: "0105522016247",
            winner: "บริษัท กรุงธนเอนยิเนียร์ จำกัด",
            contract_no: "สท.2/16/2560",
            contract_date: "15 มี.ค. 60",
            contract_finish_date: "31 ต.ค. 62",
            price_agree: "1,926,299,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096242846",
        project_name:
          "ประกวดราคาจ้างเหมาทำการก่อสร้างทางหลวงพิเศษ ระหว่างเมือง สายบางใหญ่ - กาญจนบุรี ช่วง กม.๓๘+๕๐๐.๐๐๐ - กม.๔๔+๒๖๖.๘๓๓ โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 1 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "28 ก.ย. 59",
        project_money: "1,935,000,000.00",
        price_build: "1,916,864,318.28",
        sum_price_agree: "1,911,113,000.00",
        budget_year: 2560,
        transaction_date: "20 ก.พ. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 13.854747238664913,
          lon: 100.0585002527805,
        },
        geom: "POINT(100.0585002527805 13.854747238664913)",
        contract: [
          {
            winner_tin: "0105507001749",
            winner: "บริษัท เอ.เอส.แอสโซซิเอท เอนยิเนียริ่ง (1964) จำกัด",
            contract_no: "สท.1/14/2560",
            contract_date: "20 ก.พ. 60",
            contract_finish_date: "8 ต.ค. 62",
            price_agree: "1,911,113,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096223148",
        project_name:
          "ประกวดราคาจ้างโครงการก่อสร้างทางหลวงพิเศษระหว่างเมือง  สายบางปะอิน - สระบุรี - นครราชสีมา ช่วง กม. 82 + 500.000 - กม. 86 + 000.000 โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 2 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "27 ก.ย. 59",
        project_money: "1,860,000,000.00",
        price_build: "1,856,071,337.50",
        sum_price_agree: "1,850,470,000.00",
        budget_year: 2560,
        transaction_date: "26 ก.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 14.7080854310805,
          lon: 101.14991481678301,
        },
        geom: "POINT(101.14991481678301 14.7080854310805)",
        contract: [
          {
            winner_tin: "0105522016247",
            winner: "บริษัท กรุงธนเอนยิเนียร์ จำกัด",
            contract_no: "สท.2/26/2560",
            contract_date: "26 ก.ค. 60",
            contract_finish_date: "10 ก.ค. 63",
            price_agree: "1,850,470,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096226638",
        project_name:
          "ประกวดราคาจ้างโครงการก่อสร้างทางหลวงพิเศษระหว่างเมือง สายบางปะอิน - สระบุรี - นครราชสีมา ช่วง กม.0+000.000 - กม.7+332.494 (WEST SPUR LINE) (รวมทางแยกต่างระดับบางปะอิน 2) โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 2 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "26 ก.ย. 59",
        project_money: "2,000,000,000.00",
        price_build: "1,824,739,304.67",
        sum_price_agree: "1,815,576,000.00",
        budget_year: 2560,
        transaction_date: "15 มี.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 14.2121227884713,
          lon: 100.61092888791703,
        },
        geom: "LINESTRING(100.62378441770217 14.227432255426237,100.59807335813186 14.196813321516363)",
        contract: [
          {
            winner_tin: "0107536001001",
            winner:
              "บริษัท ซิโน-ไทย เอ็นจีเนียริ่ง แอนด์ คอนสตรัคชั่น จำกัด (มหาชน)",
            contract_no: "สท.2/14/2560",
            contract_date: "15 มี.ค. 60",
            contract_finish_date: "28 ก.พ. 63",
            price_agree: "1,815,576,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096226116",
        project_name:
          "ประกวดราคาจ้างโครงการก่อสร้างทางหลวงพิเศษระหว่างเมือง สายบางปะอิน - สระบุรี - นครราชสีมา ช่วง กม.77+000.000 - กม.82+500.000 (รวมทางแยกต่างระดับมวกเหล็ก) โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 2 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "26 ก.ย. 59",
        project_money: "1,990,000,000.00",
        price_build: "1,766,280,995.77",
        sum_price_agree: "1,760,610,000.00",
        budget_year: 2560,
        transaction_date: "15 มี.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 14.7080854310805,
          lon: 101.14991481678301,
        },
        geom: "LINESTRING(101.16101558582598 14.723360758814595,101.13881404774004 14.692810103346405)",
        contract: [
          {
            winner_tin: "0105522016247",
            winner: "บริษัท กรุงธนเอนยิเนียร์ จำกัด",
            contract_no: "สท.2/18/2560",
            contract_date: "15 มี.ค. 60",
            contract_finish_date: "31 ต.ค. 62",
            price_agree: "1,760,610,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096252977",
        project_name:
          "ประกวดราคาจ้างเหมาทำการก่อสร้างทางหลวงพิเศษระหว่างเมือง สายบางใหญ่ - กาญจนบุรี ช่วงกม.44+266.833 - กม.46+000.000 (รวมทางแยกต่างระดับนครปฐมตะวันตก) โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 1 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "29 ก.ย. 59",
        project_money: "1,850,000,000.00",
        price_build: "1,732,274,858.62",
        sum_price_agree: "1,727,078,000.00",
        budget_year: 2560,
        transaction_date: "20 มี.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 13.84841380459862,
          lon: 100.00030517578125,
        },
        geom: "POINT(100.00030517578125 13.84841380459862)",
        contract: [
          {
            winner_tin: "0103520011637",
            winner: "ห้างหุ้นส่วนจำกัด นภาก่อสร้าง",
            contract_no: "สท.1/23/2560",
            contract_date: "20 มี.ค. 60",
            contract_finish_date: "4 ม.ค. 63",
            price_agree: "1,727,078,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096175086",
        project_name:
          "ประกวดราคาจ้างเหมาทำการก่อสร้างทางหลวงพิเศษระหว่างเมือง สายบางใหญ่ - กาญจนบุรี ช่วง กม.30+000.000 - กม.35+900.000 โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 1 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "26 ก.ย. 59",
        project_money: "2,015,000,000.00",
        price_build: "1,726,959,547.62",
        sum_price_agree: "1,721,780,000.00",
        budget_year: 2560,
        transaction_date: "20 ก.พ. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 13.849913844056902,
          lon: 99.92391586303711,
        },
        geom: "POINT(99.92391586303711 13.849913844056902)",
        contract: [
          {
            winner_tin: "0105524029869",
            winner: "บริษัท เสริมสงวนก่อสร้าง จำกัด",
            contract_no: "สท.1/10/2560",
            contract_date: "20 ก.พ. 60",
            contract_finish_date: "7 ธ.ค. 62",
            price_agree: "1,721,780,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096024329",
        project_name:
          "ประกวดราคาจ้างเหมาทำการก่อสร้างทางหลวงพิเศษระหว่างเมือง สายบางใหญ่ - กาญจนบุรี ช่วง กม.9+000.000 - กม.13+000.000 โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 1 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "8 ก.ย. 59",
        project_money: "2,050,000,000.00",
        price_build: "1,706,983,214.98",
        sum_price_agree: "1,701,860,000.00",
        budget_year: 2560,
        transaction_date: "20 ก.พ. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 13.861842198530246,
          lon: 100.33154055476187,
        },
        geom: "POINT(100.33154055476187 13.861842198530246)",
        contract: [
          {
            winner_tin: "0415522000101",
            winner: "บริษัท ไทยวัฒน์วิศวการทาง จำกัด",
            contract_no: "สท.1/9/2560",
            contract_date: "20 ก.พ. 60",
            contract_finish_date: "7 พ.ย. 62",
            price_agree: "1,701,860,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096256388",
        project_name:
          "ประกวดราคาจ้างเหมาทำการก่อสร้างทางหลวงพิเศษระหว่างเมือง สายบางใหญ่ - กาญจนบุรี ช่วง กม.35+900.000 - กม.38+500.000 (รวมทางแยกต่างระดับนครปฐมตะวันออก) โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมทางหลวง",
        dept_sub_name: "สำนักก่อสร้างทางที่ 1 กรมทางหลวง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "29 ก.ย. 59",
        project_money: "1,926,000,000.00",
        price_build: "1,695,275,022.29",
        sum_price_agree: "1,684,477,000.00",
        budget_year: 2560,
        transaction_date: "1 ก.ย. 60",
        province: "กรุงเทพมหานคร",
        district: "ราชเทวี",
        subdistrict: "ทุ่งพญาไท",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 13.8550154471925,
          lon: 100.099495463521,
        },
        geom: "POINT(100.09949546352101 13.8550154471925)",
        contract: [
          {
            winner_tin: "0105524022074",
            winner: "บริษัท ชัยนันท์ค้าวัตถุก่อสร้าง (2524) จำกัด",
            contract_no: "สท.1/30/2560",
            contract_date: "1 ก.ย. 60",
            contract_finish_date: "16 ก.ค. 63",
            price_agree: "1,684,477,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59096077445",
        project_name:
          "ประกวดราคาจ้างก่อสร้างอาคารที่ทำการใหม่ กระทรวงการคลัง โดยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "สำนักงานปลัดกระทรวงการคลัง",
        dept_sub_name: "สำนักงานปลัดกระทรวงการคลัง กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "20 ก.ย. 59",
        project_money: "1,966,000,000.00",
        price_build: "1,831,723,000.00",
        sum_price_agree: "1,680,000,000.00",
        budget_year: 2560,
        transaction_date: "29 มี.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "พญาไท",
        subdistrict: "สามเสนใน",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 13.782121159406307,
          lon: 100.53554534977593,
        },
        geom: "POINT(100.53554534977593 13.782121159406307)",
        contract: [
          {
            winner_tin: "0107536001001",
            winner:
              "บริษัท ซิโน-ไทย เอ็นจีเนียริ่ง แอนด์ คอนสตรัคชั่น จำกัด (มหาชน)",
            contract_no: "35/2560",
            contract_date: "29 มี.ค. 60",
            contract_finish_date: "3 ม.ค. 63",
            price_agree: "1,680,000,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
      {
        project_id: "59106076400",
        project_name:
          "ประกวดราคาจ้างก่อสร้างเขื่อนหัวงานและอาคารประกอบพร้อมส่วนประกอบอื่น  โครงการอ่างเก็บน้ำน้ำปี้อันเนื่องมาจากพระราชดำริ จังหวัดพะเยา ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        project_type_name: "จ้างก่อสร้าง",
        dept_name: "กรมชลประทาน",
        dept_sub_name: "กองพัสดุ กรมชลประทาน กรุงเทพฯ",
        purchase_method_name: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
        purchase_method_group_name:
          "วิธีการจัดหา ประกาศเชิญชวนทั่วไป คัดเลือก เฉพาะเจาะจง",
        announce_date: "1 พ.ย. 59",
        project_money: "2,600,000,000.00",
        price_build: "2,589,931,656.66",
        sum_price_agree: "1,650,000,000.00",
        budget_year: 2560,
        transaction_date: "22 พ.ค. 60",
        province: "กรุงเทพมหานคร",
        district: "ดุสิต",
        subdistrict: "ถนนนครไชยศรี",
        project_status: "ระหว่างดำเนินการ",
        project_location: {
          lat: 18.8875331776201,
          lon: 100.32914662724801,
        },
        geom: "POINT(100.32914662724801 18.8875331776201)",
        contract: [
          {
            winner_tin: "0107547000923",
            winner: "บริษัท สยามพันธุ์วัฒนา จำกัด (มหาชน)",
            contract_no: "กจ.32/2560 (สพด.)",
            contract_date: "22 พ.ค. 60",
            contract_finish_date: "-",
            price_agree: "1,650,000,000",
            status: "ระหว่างดำเนินการ",
          },
        ],
      },
    ],
  };

  const populateYears = () => {
    let currentYear = new Date().getFullYear();
    let earliestYear = 1970;
    let yearsArr = [];
    while (currentYear >= earliestYear) {
      yearsArr.push(currentYear);
      currentYear -= 1;
    }
    setYears(yearsArr);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => {
        setCountries(res.data);
        // console.log(res.data);
      });
    populateYears();

    setApiResponse(apiData.result);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    resultTableRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-10 justify-center py-10">
      <div className="flex flex-col justify-center  items-center gap-4">
        <div className="text-2xl font-semibold">Data Request Form:</div>
        <form className="w-[800px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="Country"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("country", { required: false })}
              >
                {countries &&
                  countries.map((item) => {
                    if (item?.name?.common === "Thailand") {
                      return (
                        <option
                          key={item?.name?.common}
                          value={item?.name?.common}
                          selected
                        >
                          {item?.name?.common}
                        </option>
                      );
                    } else {
                      return (
                        <option
                          key={item?.name?.common}
                          value={item?.name?.common}
                        >
                          {item?.name?.common}
                        </option>
                      );
                    }
                  })}
              </select>
            </div>

            <div className="mb-1">
              <label
                htmlFor="winningCompany"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Winning Company Name
              </label>
              <input
                type="text"
                id="winningCompany"
                placeholder="winningCompany"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("winningCompany", { required: false })}
              />
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="Keywords"
              className="block mb-1 text-sm font-medium text-gray-90"
            >
              Keywords
            </label>
            <input
              type="text"
              id="Keywords"
              placeholder="Keywords"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              {...register("keywords", { required: true })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="yearFrom"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Year From
              </label>
              <select
                id="yearFrom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("yearFrom", { required: false })}
                required
              >
                {years &&
                  years.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mb-1">
              <label
                htmlFor="yearTo"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                To
              </label>
              <select
                id="yearTo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("yearTo", { required: false })}
              >
                {years &&
                  years.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="purchaseMethod"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Purchase Method
              </label>
              <select
                id="purchaseMethod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("purchaseMethod", { required: false })}
              ></select>
            </div>

            <div className="mb-1">
              <label
                htmlFor="purchaseSubmethod"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Purchase Sub-Method
              </label>
              <select
                id="purchaseSubmethod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("purchaseSubmethod", { required: false })}
              ></select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="mb-1">
              <label
                htmlFor="xaxis"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Department
              </label>
              <input
                type="text"
                id="xaxis"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="yaxis2"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Sub department
              </label>
              <input
                type="text"
                id="yaxis2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectType"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Project Type
              </label>
              <input
                type="text"
                id="projectType"
                placeholder="projectType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("projectType", { required: false })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="yearFrom"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Announce Date From
              </label>
              <select
                id="yearFrom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("yearFrom", { required: false })}
              >
                {years &&
                  years.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mb-1">
              <label
                htmlFor="yearTo"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Till
              </label>
              <select
                id="yearTo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("yearTo", { required: false })}
              >
                {years &&
                  years.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="projectType"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Reference Price From
              </label>
              <input
                type="text"
                id="projectType"
                placeholder="Price From"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("projectType", { required: false })}
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectType"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Till
              </label>
              <input
                type="text"
                id="projectType"
                placeholder="Price Till"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("projectType", { required: false })}
              />
            </div>
          </div>
          <div className="mb-1">
            <label
              htmlFor="purchaseMethod"
              className="block mb-1 text-sm font-medium text-gray-90"
            >
              Project Status
            </label>
            <select
              id="purchaseMethod"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              {...register("purchaseMethod", { required: false })}
            ></select>
          </div>

          <div className="mt-2 flex gap-2 justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>

            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="text-2xl text-center font-semibold">Result:</div>

      <div
        className="relative overflow-x-auto sm:rounded-lg shadow-[0_0_1px_0px#000] mb-10"
        ref={resultTableRef}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Project
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Winning Company
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3" style={{ width: "200px" }}>
                Reference Price
              </th>
              <th scope="col" className="px-6 py-3" style={{ width: "200px" }}>
                Winning Bid
              </th>
              <th scope="col" className="px-6 py-3" style={{ width: "150px" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {apiResponse &&
              apiResponse.map((item, idx) => (
                <tr
                  key={`apiData${idx}`}
                  className="odd:bg-white  even:bg-gray-50  border-b "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {idx + 1}
                  </th>
                  <td className="px-6 py-4 text-blue-500 hover:text-blue-700 hover:underline transition duration-300">
                    <Link to="/report" state={{ data: item }}>
                      {item?.project_name}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{item?.dept_name}</td>
                  <td className="px-6 py-4">{item?.contract[0]?.winner}</td>
                  <td className="px-6 py-4">{item?.province}</td>
                  <td className="px-6 py-4">&#3647;{" "}{item?.price_build}</td>
                  <td className="px-6 py-4">
                    &#3647;{" "} {item?.contract[0]?.price_agree}
                  </td>
                  <td className="px-6 py-4">{item?.contract[0]?.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
