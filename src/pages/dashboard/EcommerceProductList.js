import { paramCase } from 'change-case';
import { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
// @mui
import {
  Box,
  Card,
  Table,
  Button,
  Switch,
  Tooltip,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getProducts } from '../../redux/slices/product';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import {
  TableNoData,
  TableSkeleton,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedActions,
} from '../../components/table';
// sections
import { ProductTableRow, ProductTableToolbar } from '../../sections/@dashboard/e-commerce/product-list';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'المنتج', align: 'left' },
  { id: 'تاريخ التسجيل', label: 'تاريخ الإضافة', align: 'left' },
  { id: 'inventoryType', label: 'الحالة', align: 'center', width: 180 },
  { id: 'price', label: 'السعر', align: 'right' },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function EcommerceProductList() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({
    defaultOrderBy: 'createdAt',
  });

  const { themeStretch } = useSettings();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.product);

  const [tableData, setTableData] = useState([]);

  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      setTableData([
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Nike Air Force 1 NDESTRUKT",
            "code": "38BEE270",
            "sku": "WW75K5210YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 16.19,
            "priceSale": 16.19,
            "totalRating": 2.5,
            "totalReview": 6631,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 8531,
                    "reviewCount": 3790
                },
                {
                    "name": "2 Star",
                    "starCount": 4622,
                    "reviewCount": 1031
                },
                {
                    "name": "3 Star",
                    "starCount": 7714,
                    "reviewCount": 2573
                },
                {
                    "name": "4 Star",
                    "starCount": 8153,
                    "reviewCount": 946
                },
                {
                    "name": "5 Star",
                    "starCount": 2565,
                    "reviewCount": 6869
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 6165,
                    "postedAt": "2022-10-04T12:22:38.363Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 7132,
                    "postedAt": "2022-10-03T11:22:38.363Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 7925,
                    "postedAt": "2022-10-02T10:22:38.363Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 9029,
                    "postedAt": "2022-10-01T09:22:38.363Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 8418,
                    "postedAt": "2022-09-30T08:22:38.363Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 3526,
                    "postedAt": "2022-09-29T07:22:38.363Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 7703,
                    "postedAt": "2022-09-28T06:22:38.363Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 5339,
                    "postedAt": "2022-09-27T05:22:38.363Z"
                }
            ],
            "status": "sale",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 77,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 454,
            "createdAt": "2022-10-04T12:22:38.364Z",
            "category": "Shose",
            "gender": "Kids",
            "colors": [
                "#00AB55",
                "#000000"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Foundations Matte Flip Flop",
            "code": "38BEE271",
            "sku": "WW75K5211YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 35.71,
            "priceSale": null,
            "totalRating": 2,
            "totalReview": 1939,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 4047,
                    "reviewCount": 9823
                },
                {
                    "name": "2 Star",
                    "starCount": 1686,
                    "reviewCount": 6323
                },
                {
                    "name": "3 Star",
                    "starCount": 5604,
                    "reviewCount": 637
                },
                {
                    "name": "4 Star",
                    "starCount": 5490,
                    "reviewCount": 9817
                },
                {
                    "name": "5 Star",
                    "starCount": 6607,
                    "reviewCount": 1724
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 1462,
                    "postedAt": "2022-10-04T12:22:38.364Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 7377,
                    "postedAt": "2022-10-03T11:22:38.364Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 7052,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 2653,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 5938,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 5982,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 1552,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 1332,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 143,
            "createdAt": "2022-10-03T11:22:38.365Z",
            "category": "Shose",
            "gender": "Women",
            "colors": [
                "#000000",
                "#FFFFFF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
            "code": "38BEE272",
            "sku": "WW75K5212YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 34.3,
            "priceSale": null,
            "totalRating": 4.9,
            "totalReview": 9657,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 8217,
                    "reviewCount": 2369
                },
                {
                    "name": "2 Star",
                    "starCount": 104,
                    "reviewCount": 4151
                },
                {
                    "name": "3 Star",
                    "starCount": 1014,
                    "reviewCount": 4159
                },
                {
                    "name": "4 Star",
                    "starCount": 5332,
                    "reviewCount": 1065
                },
                {
                    "name": "5 Star",
                    "starCount": 3318,
                    "reviewCount": 6820
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 3650,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 2290,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 6308,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 4250,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 7814,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 7848,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 8918,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 9203,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 51,
            "createdAt": "2022-10-02T10:22:38.365Z",
            "category": "Apparel",
            "gender": "Men",
            "colors": [
                "#FFFFFF",
                "#FFC0CB"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Arizona Soft Footbed Sandal",
            "code": "38BEE273",
            "sku": "WW75K5213YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 93.1,
            "priceSale": 93.1,
            "totalRating": 2,
            "totalReview": 3231,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 6821,
                    "reviewCount": 9621
                },
                {
                    "name": "2 Star",
                    "starCount": 8393,
                    "reviewCount": 2921
                },
                {
                    "name": "3 Star",
                    "starCount": 6671,
                    "reviewCount": 8835
                },
                {
                    "name": "4 Star",
                    "starCount": 1663,
                    "reviewCount": 416
                },
                {
                    "name": "5 Star",
                    "starCount": 1720,
                    "reviewCount": 3303
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 6842,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 8179,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 6919,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 2260,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 7541,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 2256,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 2151,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 4094,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "sale",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 87,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 842,
            "createdAt": "2022-10-01T09:22:38.365Z",
            "category": "Apparel",
            "gender": "Kids",
            "colors": [
                "#FFC0CB",
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Boston Soft Footbed Sandal",
            "code": "38BEE274",
            "sku": "WW75K5214YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 55.47,
            "priceSale": null,
            "totalRating": 4,
            "totalReview": 2408,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 6158,
                    "reviewCount": 9230
                },
                {
                    "name": "2 Star",
                    "starCount": 2814,
                    "reviewCount": 5025
                },
                {
                    "name": "3 Star",
                    "starCount": 7401,
                    "reviewCount": 1896
                },
                {
                    "name": "4 Star",
                    "starCount": 9200,
                    "reviewCount": 450
                },
                {
                    "name": "5 Star",
                    "starCount": 8552,
                    "reviewCount": 6169
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 660,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 39,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 8710,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 3017,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 6789,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 9475,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 7847,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 8586,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 320,
            "createdAt": "2022-09-30T08:22:38.365Z",
            "category": "Accessories",
            "gender": "Women",
            "colors": [
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Zoom Freak 2",
            "code": "38BEE275",
            "sku": "WW75K5215YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 89.09,
            "priceSale": null,
            "totalRating": 5,
            "totalReview": 8601,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 1432,
                    "reviewCount": 4617
                },
                {
                    "name": "2 Star",
                    "starCount": 9300,
                    "reviewCount": 2080
                },
                {
                    "name": "3 Star",
                    "starCount": 4631,
                    "reviewCount": 7699
                },
                {
                    "name": "4 Star",
                    "starCount": 228,
                    "reviewCount": 604
                },
                {
                    "name": "5 Star",
                    "starCount": 4312,
                    "reviewCount": 6068
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 7158,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 5930,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 1282,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 4613,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 4733,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 6786,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 8876,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 2251,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "",
            "inventoryType": "in_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 409,
            "createdAt": "2022-09-29T07:22:38.365Z",
            "category": "Apparel",
            "gender": "Men",
            "colors": [
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Gazelle Vintage low-top sneakers",
            "code": "38BEE276",
            "sku": "WW75K5216YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 44.39,
            "priceSale": 44.39,
            "totalRating": 4.9,
            "totalReview": 8088,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 3228,
                    "reviewCount": 1089
                },
                {
                    "name": "2 Star",
                    "starCount": 5779,
                    "reviewCount": 8104
                },
                {
                    "name": "3 Star",
                    "starCount": 1688,
                    "reviewCount": 4962
                },
                {
                    "name": "4 Star",
                    "starCount": 8555,
                    "reviewCount": 2559
                },
                {
                    "name": "5 Star",
                    "starCount": 3239,
                    "reviewCount": 7376
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 8884,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 2570,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 2695,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 5976,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 2918,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 8011,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 2172,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 9600,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "sale",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 69,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 689,
            "createdAt": "2022-09-28T06:22:38.365Z",
            "category": "Shose",
            "gender": "Women",
            "colors": [
                "#00AB55",
                "#000000"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Jordan Delta",
            "code": "38BEE277",
            "sku": "WW75K5217YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 26.92,
            "priceSale": null,
            "totalRating": 5,
            "totalReview": 3440,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 691,
                    "reviewCount": 3027
                },
                {
                    "name": "2 Star",
                    "starCount": 6332,
                    "reviewCount": 4218
                },
                {
                    "name": "3 Star",
                    "starCount": 1010,
                    "reviewCount": 6886
                },
                {
                    "name": "4 Star",
                    "starCount": 8661,
                    "reviewCount": 9441
                },
                {
                    "name": "5 Star",
                    "starCount": 9568,
                    "reviewCount": 7913
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 9320,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 4202,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 668,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 2206,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 2360,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 5523,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 3016,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 754,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 375,
            "createdAt": "2022-09-27T05:22:38.365Z",
            "category": "Shose",
            "gender": "Kids",
            "colors": [
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_9.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Air Jordan XXXV PF",
            "code": "38BEE278",
            "sku": "WW75K5218YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 45.35,
            "priceSale": null,
            "totalRating": 3.7,
            "totalReview": 2956,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 9471,
                    "reviewCount": 4376
                },
                {
                    "name": "2 Star",
                    "starCount": 9230,
                    "reviewCount": 627
                },
                {
                    "name": "3 Star",
                    "starCount": 8651,
                    "reviewCount": 3472
                },
                {
                    "name": "4 Star",
                    "starCount": 2767,
                    "reviewCount": 8315
                },
                {
                    "name": "5 Star",
                    "starCount": 4297,
                    "reviewCount": 6237
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 9462,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 2369,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 9701,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 1726,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 3495,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 8069,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 5563,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 3094,
                    "postedAt": "2022-09-27T05:22:38.365Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 453,
            "createdAt": "2022-09-26T04:22:38.365Z",
            "category": "Apparel",
            "gender": "Women",
            "colors": [
                "#FFFFFF",
                "#FFC0CB"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_10.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Rod Laver low-top sneakers",
            "code": "38BEE279",
            "sku": "WW75K5219YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 26.96,
            "priceSale": 26.96,
            "totalRating": 2.5,
            "totalReview": 2885,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 4760,
                    "reviewCount": 5509
                },
                {
                    "name": "2 Star",
                    "starCount": 2703,
                    "reviewCount": 6157
                },
                {
                    "name": "3 Star",
                    "starCount": 6424,
                    "reviewCount": 1691
                },
                {
                    "name": "4 Star",
                    "starCount": 6510,
                    "reviewCount": 9502
                },
                {
                    "name": "5 Star",
                    "starCount": 4883,
                    "reviewCount": 718
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 2719,
                    "postedAt": "2022-10-04T12:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 7002,
                    "postedAt": "2022-10-03T11:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 9669,
                    "postedAt": "2022-10-02T10:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 7765,
                    "postedAt": "2022-10-01T09:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 492,
                    "postedAt": "2022-09-30T08:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 4548,
                    "postedAt": "2022-09-29T07:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 425,
                    "postedAt": "2022-09-28T06:22:38.365Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 2661,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "sale",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 42,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 497,
            "createdAt": "2022-09-25T03:22:38.366Z",
            "category": "Accessories",
            "gender": "Women",
            "colors": [
                "#FFFFFF",
                "#FFC0CB",
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_11.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Kyrie 7 EP Sisterhood",
            "code": "38BEE2710",
            "sku": "WW75K52110YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 78.22,
            "priceSale": null,
            "totalRating": 2,
            "totalReview": 1628,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 6334,
                    "reviewCount": 7051
                },
                {
                    "name": "2 Star",
                    "starCount": 6223,
                    "reviewCount": 5720
                },
                {
                    "name": "3 Star",
                    "starCount": 1044,
                    "reviewCount": 6941
                },
                {
                    "name": "4 Star",
                    "starCount": 4813,
                    "reviewCount": 7737
                },
                {
                    "name": "5 Star",
                    "starCount": 3404,
                    "reviewCount": 7486
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 2511,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 978,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 9303,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 9652,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 9519,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 9996,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 5308,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 6007,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 792,
            "createdAt": "2022-09-24T02:22:38.366Z",
            "category": "Apparel",
            "gender": "Women",
            "colors": [
                "#FFC0CB",
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_12.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Pharrell Williams Human Race NMD sneakers",
            "code": "38BEE2711",
            "sku": "WW75K52111YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 35.54,
            "priceSale": null,
            "totalRating": 4.9,
            "totalReview": 101,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 2807,
                    "reviewCount": 4747
                },
                {
                    "name": "2 Star",
                    "starCount": 4643,
                    "reviewCount": 9946
                },
                {
                    "name": "3 Star",
                    "starCount": 2805,
                    "reviewCount": 2746
                },
                {
                    "name": "4 Star",
                    "starCount": 8022,
                    "reviewCount": 5294
                },
                {
                    "name": "5 Star",
                    "starCount": 7776,
                    "reviewCount": 7503
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 4296,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 5073,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 7776,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 9824,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 1680,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 3875,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 6418,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 2269,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 268,
            "createdAt": "2022-09-23T01:22:38.366Z",
            "category": "Accessories",
            "gender": "Women",
            "colors": [
                "#FFFFFF",
                "#FFC0CB",
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b13",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_13.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Nike Blazer Low 77 Vintage",
            "code": "38BEE2712",
            "sku": "WW75K52112YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 90.69,
            "priceSale": 90.69,
            "totalRating": 4.8,
            "totalReview": 4568,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 8775,
                    "reviewCount": 3564
                },
                {
                    "name": "2 Star",
                    "starCount": 7014,
                    "reviewCount": 6303
                },
                {
                    "name": "3 Star",
                    "starCount": 6249,
                    "reviewCount": 8400
                },
                {
                    "name": "4 Star",
                    "starCount": 9997,
                    "reviewCount": 4890
                },
                {
                    "name": "5 Star",
                    "starCount": 7752,
                    "reviewCount": 5995
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 5638,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 8502,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 4024,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 9717,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 4079,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 1155,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 3622,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 1158,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "sale",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 46,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 262,
            "createdAt": "2022-09-22T00:22:38.366Z",
            "category": "Shose",
            "gender": "Men",
            "colors": [
                "#FFFFFF",
                "#FFC0CB",
                "#FF4842",
                "#1890FF",
                "#94D82D"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b14",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_14.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "ASMC Winter Boot Cold.Rdy",
            "code": "38BEE2713",
            "sku": "WW75K52113YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 63.61,
            "priceSale": null,
            "totalRating": 4,
            "totalReview": 139,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 7363,
                    "reviewCount": 4839
                },
                {
                    "name": "2 Star",
                    "starCount": 2674,
                    "reviewCount": 3578
                },
                {
                    "name": "3 Star",
                    "starCount": 1441,
                    "reviewCount": 1187
                },
                {
                    "name": "4 Star",
                    "starCount": 6462,
                    "reviewCount": 286
                },
                {
                    "name": "5 Star",
                    "starCount": 1687,
                    "reviewCount": 2954
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 2796,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 5890,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 4250,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 3258,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 1093,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 1144,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 5136,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 4576,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "new",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 475,
            "createdAt": "2022-09-20T23:22:38.366Z",
            "category": "Accessories",
            "gender": "Women",
            "colors": [
                "#FF4842",
                "#1890FF",
                "#94D82D"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b15",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_15.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "ZX 8000 Lego sneakers",
            "code": "38BEE2714",
            "sku": "WW75K52114YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 67.55,
            "priceSale": null,
            "totalRating": 2,
            "totalReview": 4236,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 5787,
                    "reviewCount": 4106
                },
                {
                    "name": "2 Star",
                    "starCount": 895,
                    "reviewCount": 7240
                },
                {
                    "name": "3 Star",
                    "starCount": 9225,
                    "reviewCount": 8513
                },
                {
                    "name": "4 Star",
                    "starCount": 1521,
                    "reviewCount": 526
                },
                {
                    "name": "5 Star",
                    "starCount": 4425,
                    "reviewCount": 7922
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 6552,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 8665,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 9511,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 3454,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 6445,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 7496,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 3026,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 247,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "new",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 71,
            "createdAt": "2022-09-19T22:22:38.366Z",
            "category": "Apparel",
            "gender": "Women",
            "colors": [
                "#00AB55",
                "#000000"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b16",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_16.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Ultraboost 21 sneakers",
            "code": "38BEE2715",
            "sku": "WW75K52115YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 94.75,
            "priceSale": 94.75,
            "totalRating": 3.7,
            "totalReview": 7371,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 3959,
                    "reviewCount": 9494
                },
                {
                    "name": "2 Star",
                    "starCount": 9101,
                    "reviewCount": 5439
                },
                {
                    "name": "3 Star",
                    "starCount": 4415,
                    "reviewCount": 8064
                },
                {
                    "name": "4 Star",
                    "starCount": 9022,
                    "reviewCount": 2138
                },
                {
                    "name": "5 Star",
                    "starCount": 2640,
                    "reviewCount": 8200
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 7274,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 5662,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 3028,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 1244,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 2196,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 3390,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 5121,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 3939,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "sale",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 64,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 883,
            "createdAt": "2022-09-18T21:22:38.366Z",
            "category": "Apparel",
            "gender": "Kids",
            "colors": [
                "#1890FF",
                "#94D82D",
                "#FFC107"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b17",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_17.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "2750 Cotu Classic Sneaker",
            "code": "38BEE2716",
            "sku": "WW75K52116YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 75.78,
            "priceSale": null,
            "totalRating": 1.4,
            "totalReview": 7599,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 3774,
                    "reviewCount": 7981
                },
                {
                    "name": "2 Star",
                    "starCount": 5980,
                    "reviewCount": 1342
                },
                {
                    "name": "3 Star",
                    "starCount": 4638,
                    "reviewCount": 5017
                },
                {
                    "name": "4 Star",
                    "starCount": 6189,
                    "reviewCount": 3037
                },
                {
                    "name": "5 Star",
                    "starCount": 5183,
                    "reviewCount": 6745
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 6887,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 9857,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 1308,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 8324,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 510,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 7362,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 5895,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 4170,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "new",
            "inventoryType": "in_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 878,
            "createdAt": "2022-09-17T20:22:38.366Z",
            "category": "Apparel",
            "gender": "Men",
            "colors": [
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b18",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_18.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "ZX 9000 A-ZX Series sneakers",
            "code": "38BEE2717",
            "sku": "WW75K52117YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 39.6,
            "priceSale": null,
            "totalRating": 2.4,
            "totalReview": 1974,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 873,
                    "reviewCount": 6268
                },
                {
                    "name": "2 Star",
                    "starCount": 3576,
                    "reviewCount": 734
                },
                {
                    "name": "3 Star",
                    "starCount": 1559,
                    "reviewCount": 5509
                },
                {
                    "name": "4 Star",
                    "starCount": 478,
                    "reviewCount": 5701
                },
                {
                    "name": "5 Star",
                    "starCount": 4140,
                    "reviewCount": 4069
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 813,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 3862,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 5443,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 841,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 2746,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 5962,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 979,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 554,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 720,
            "createdAt": "2022-09-16T19:22:38.366Z",
            "category": "Shose",
            "gender": "Women",
            "colors": [
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b19",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_19.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Madrid Big Buckle Sandal",
            "code": "38BEE2718",
            "sku": "WW75K52118YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 52.84,
            "priceSale": 52.84,
            "totalRating": 1.8,
            "totalReview": 9192,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 7936,
                    "reviewCount": 1746
                },
                {
                    "name": "2 Star",
                    "starCount": 53,
                    "reviewCount": 2144
                },
                {
                    "name": "3 Star",
                    "starCount": 5946,
                    "reviewCount": 9526
                },
                {
                    "name": "4 Star",
                    "starCount": 6222,
                    "reviewCount": 498
                },
                {
                    "name": "5 Star",
                    "starCount": 7525,
                    "reviewCount": 9367
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 4854,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 8405,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 6488,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 1615,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 9132,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 7658,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 832,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 5692,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "sale",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 73,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 546,
            "createdAt": "2022-09-15T18:22:38.366Z",
            "category": "Accessories",
            "gender": "Men",
            "colors": [
                "#00AB55",
                "#000000"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b20",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_20.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Chuck 70 Hi Sneaker",
            "code": "38BEE2719",
            "sku": "WW75K52119YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 72.8,
            "priceSale": null,
            "totalRating": 5,
            "totalReview": 1366,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 9538,
                    "reviewCount": 713
                },
                {
                    "name": "2 Star",
                    "starCount": 8949,
                    "reviewCount": 4195
                },
                {
                    "name": "3 Star",
                    "starCount": 441,
                    "reviewCount": 7195
                },
                {
                    "name": "4 Star",
                    "starCount": 9097,
                    "reviewCount": 8863
                },
                {
                    "name": "5 Star",
                    "starCount": 4450,
                    "reviewCount": 3265
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 9170,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 5102,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 5246,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 4293,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 9676,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 7168,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 9054,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 6377,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "",
            "inventoryType": "low_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 971,
            "createdAt": "2022-09-14T17:22:38.366Z",
            "category": "Accessories",
            "gender": "Kids",
            "colors": [
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b21",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_21.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Relaxed Adjustable Strap Slingback Sandal",
            "code": "38BEE2720",
            "sku": "WW75K52120YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 83.08,
            "priceSale": null,
            "totalRating": 2.9,
            "totalReview": 7202,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 5430,
                    "reviewCount": 2568
                },
                {
                    "name": "2 Star",
                    "starCount": 38,
                    "reviewCount": 589
                },
                {
                    "name": "3 Star",
                    "starCount": 5679,
                    "reviewCount": 1371
                },
                {
                    "name": "4 Star",
                    "starCount": 7492,
                    "reviewCount": 9486
                },
                {
                    "name": "5 Star",
                    "starCount": 9307,
                    "reviewCount": 3891
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 8120,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 6206,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 7096,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 2542,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 6113,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 3543,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 6314,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 1365,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 600,
            "createdAt": "2022-09-13T16:22:38.366Z",
            "category": "Accessories",
            "gender": "Kids",
            "colors": [
                "#FF4842",
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b22",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_22.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Superturf Adventure X Atmos",
            "code": "38BEE2721",
            "sku": "WW75K52121YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 85.02,
            "priceSale": 85.02,
            "totalRating": 3.9,
            "totalReview": 7508,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 765,
                    "reviewCount": 3723
                },
                {
                    "name": "2 Star",
                    "starCount": 6669,
                    "reviewCount": 7582
                },
                {
                    "name": "3 Star",
                    "starCount": 8218,
                    "reviewCount": 6867
                },
                {
                    "name": "4 Star",
                    "starCount": 1580,
                    "reviewCount": 5769
                },
                {
                    "name": "5 Star",
                    "starCount": 1565,
                    "reviewCount": 8338
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 9039,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 254,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 4839,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 5014,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 1580,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 8586,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 3175,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 8472,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "sale",
            "inventoryType": "in_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 80,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 286,
            "createdAt": "2022-09-12T15:22:38.366Z",
            "category": "Accessories",
            "gender": "Kids",
            "colors": [
                "#1890FF"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b23",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_23.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "Chuck Taylor All Star Lift Sneaker",
            "code": "38BEE2722",
            "sku": "WW75K52122YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 69.22,
            "priceSale": null,
            "totalRating": 3.9,
            "totalReview": 606,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 8001,
                    "reviewCount": 2897
                },
                {
                    "name": "2 Star",
                    "starCount": 7778,
                    "reviewCount": 1757
                },
                {
                    "name": "3 Star",
                    "starCount": 8352,
                    "reviewCount": 6564
                },
                {
                    "name": "4 Star",
                    "starCount": 2043,
                    "reviewCount": 5462
                },
                {
                    "name": "5 Star",
                    "starCount": 8917,
                    "reviewCount": 8627
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 64,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 25,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 7994,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 7437,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 75,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 3471,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 9867,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 4522,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "",
            "inventoryType": "in_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 447,
            "createdAt": "2022-09-11T14:22:38.366Z",
            "category": "Apparel",
            "gender": "Women",
            "colors": [
                "#1890FF",
                "#94D82D",
                "#FFC107"
            ]
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b24",
            "cover": "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_24.jpg",
            "images": [
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg",
                "https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg"
            ],
            "name": "حذاء رياضي",
            "code": "38BEE2723",
            "sku": "WW75K52123YW/SV",
            "tags": [
                "Dangal",
                "The Sting",
                "2001: A Space Odyssey",
                "Singin' in the Rain"
            ],
            "price": 60.96,
            "priceSale": null,
            "totalRating": 1.8,
            "totalReview": 9882,
            "ratings": [
                {
                    "name": "1 Star",
                    "starCount": 2145,
                    "reviewCount": 6885
                },
                {
                    "name": "2 Star",
                    "starCount": 2144,
                    "reviewCount": 4315
                },
                {
                    "name": "3 Star",
                    "starCount": 472,
                    "reviewCount": 4360
                },
                {
                    "name": "4 Star",
                    "starCount": 8769,
                    "reviewCount": 3710
                },
                {
                    "name": "5 Star",
                    "starCount": 1192,
                    "reviewCount": 7315
                }
            ],
            "reviews": [
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                    "name": "Jayvion Simon",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg",
                    "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
                    "rating": 2.5,
                    "isPurchased": true,
                    "helpful": 7610,
                    "postedAt": "2022-10-04T12:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                    "name": "Lucian Obrien",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg",
                    "comment": "Quis veniam aut saepe aliquid nulla.",
                    "rating": 2,
                    "isPurchased": true,
                    "helpful": 4224,
                    "postedAt": "2022-10-03T11:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                    "name": "Deja Brady",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg",
                    "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
                    "rating": 4.9,
                    "isPurchased": true,
                    "helpful": 3068,
                    "postedAt": "2022-10-02T10:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                    "name": "Harrison Stein",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg",
                    "comment": "Error ut sit vel molestias velit.",
                    "rating": 2,
                    "isPurchased": false,
                    "helpful": 7683,
                    "postedAt": "2022-10-01T09:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                    "name": "Reece Chung",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg",
                    "comment": "Quo quia sit nihil nemo doloremque et.",
                    "rating": 4,
                    "isPurchased": false,
                    "helpful": 2035,
                    "postedAt": "2022-09-30T08:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                    "name": "Lainey Davidson",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg",
                    "comment": "Autem doloribus harum vero laborum.",
                    "rating": 5,
                    "isPurchased": true,
                    "helpful": 3437,
                    "postedAt": "2022-09-29T07:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                    "name": "Cristopher Cardenas",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",
                    "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
                    "rating": 4.9,
                    "isPurchased": false,
                    "helpful": 6886,
                    "postedAt": "2022-09-28T06:22:38.366Z"
                },
                {
                    "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                    "name": "Melanie Noble",
                    "avatarUrl": "https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg",
                    "comment": "Voluptas sunt magni adipisci praesentium saepe.",
                    "rating": 5,
                    "isPurchased": false,
                    "helpful": 844,
                    "postedAt": "2022-09-27T05:22:38.366Z"
                }
            ],
            "status": "new",
            "inventoryType": "out_of_stock",
            "sizes": [
                "6",
                "7",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "13"
            ],
            "available": 2,
            "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
            "sold": 895,
            "createdAt": "2022-09-10T13:22:38.366Z",
            "category": "Apparel",
            "gender": "Men",
            "colors": [
                "#FF4842",
                "#1890FF"
            ]
        }
    ]);
      console.log(products)
    }
  }, [products]);

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = tableData.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const handleEditRow = (id) => {
    navigate(PATH_DASHBOARD.eCommerce.edit(paramCase(id)));
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const denseHeight = dense ? 60 : 80;

  const isNotFound = (!dataFiltered.length && !!filterName) || (!isLoading && !dataFiltered.length);

  return (
    <Page title="Ecommerce: Product List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="قـائـمـة مـنـتـجـات الـمـخـزون"
          links={[
            { name: 'لـوحـة الـتـحـكـم', href: PATH_DASHBOARD.root },
            {
              name: 'الـمـخـزون',
              href: PATH_DASHBOARD.eCommerce.root,
            },
            { name: 'قـائـمـة مـنـتـجـات الـمـخـزون' },
          ]}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
              component={RouterLink}
              to={PATH_DASHBOARD.eCommerce.new}
            >
              New Product
            </Button>
          }
        />

        <Card>
          <ProductTableToolbar filterName={filterName} onFilterName={handleFilterName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 960, position: 'relative' }}>
              {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={tableData.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                  actions={
                    <Tooltip title="Delete">
                      <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                        <Iconify icon={'eva:trash-2-outline'} />
                      </IconButton>
                    </Tooltip>
                  }
                />
              )}

              <Table size={dense ? 'small' : 'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {(isLoading ? [...Array(rowsPerPage)] : dataFiltered)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) =>
                      row ? (
                        <ProductTableRow
                          key={row.id}
                          row={row}
                          selected={selected.includes(row.id)}
                          onSelectRow={() => onSelectRow(row.id)}
                          onDeleteRow={() => handleDeleteRow(row.id)}
                          onEditRow={() => handleEditRow(row.name)}
                        />
                      ) : (
                        !isNotFound && <TableSkeleton key={index} sx={{ height: denseHeight }} />
                      )
                    )}

                  <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataFiltered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />

            <FormControlLabel
              control={<Switch checked={dense} onChange={onChangeDense} />}
              label="Dense"
              sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
            />
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({ tableData, comparator, filterName }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter((item) => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
  }

  return tableData;
}
