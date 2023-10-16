package com.example.ecommerce.controller;

import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.entity.Address;
import com.example.ecommerce.entity.Orders;
import com.example.ecommerce.exception.CartItemException;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.service.CartItemService;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
public class UserController {

    private final CartService cartService;
    private final CartItemService cartItemService;
    private final OrderService orderService;

    public UserController(CartService cartService, CartItemService cartItemService, OrderService orderService) {
        this.cartService = cartService;
        this.cartItemService = cartItemService;
        this.orderService = orderService;
    }

    @PostMapping("/addToCart/{userId}")
    public ResponseEntity<String> addToCart(@PathVariable Long userId,
                                            @RequestParam("productId") Long productId,
                                            @RequestParam("quantity") int quantity,
                                            @RequestParam("price") int price) throws ProductException {
        CartItemDTO cartItemDTO = new CartItemDTO(productId, quantity, price);
        try {
            return ResponseEntity.ok(cartService.addCartItem(userId, cartItemDTO));
        } catch (ProductException e) {
            throw new ProductException("Add product to cart fail");
        }
    }

    @DeleteMapping("deleteItem/{userId}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long userId,
                                            @RequestParam Long productId) throws CartItemException, UserException {
        return ResponseEntity.ok(cartItemService.deleteCartItem(productId, userId));
    }

    @PostMapping("/checkout")
    public ResponseEntity<Orders> createOrder(@RequestParam Long userId,
                                              @RequestParam String street,
                                              @RequestParam String town,
                                              @RequestParam String ward,
                                              @RequestParam String district,
                                              @RequestParam String province) throws UserException {
        Address address = new Address();
        address.setStreet(street);
        address.setTown(town);
        address.setWard(ward);
        address.setDistrict(district);
        address.setProvince(province);
        return ResponseEntity.ok(orderService.createOrder(userId, address));
    }
}
