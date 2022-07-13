import request from "@/utils/request";
// /admin/product/getCategory1
export const reqCategory1List = () => {
  return request({
    url: "/admin/product/getCategory1",
    method: "get",
  });
};

export const reqCategory2List = (category1Id) => {
  return request({
    url: `/admin/product/getCategory2/${category1Id}`,
    method: "get",
  });
};

export const reqCategory3List = (category2Id) => {
  return request({
    url: `/admin/product/getCategory3/${category2Id}`,
    method: "get",
  });
};

// /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
export const reqAttrList = (category1Id, category2Id, category3Id) => {
  return request({
    url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
    method: "get",
  });
};

// /admin/product/saveAttrInfo

export const reqAddOrUpdateAttr = (data) => {
  return request({
    url: `/admin/product/saveAttrInfo`,
    method: "post",
    data,
  });
};
