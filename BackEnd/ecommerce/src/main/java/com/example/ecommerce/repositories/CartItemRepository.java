package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    @Query("SELECT ci FROM CartItem ci where ci.cart=:cart and ci.product=:product " +
            "and ci.userId=:userId")
    CartItem isCartItemExist(@Param("cart")Cart cart, @Param("product")Product product,
                             @Param("userId")Long userId);
}
