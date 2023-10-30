package com.example.ecommerce.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateOrderReq {
    private Long userId;
    private String fullname;
    private String email;
    private String phone;
    private String street;
    private String ward;
    private String district;
    private String province;
}
